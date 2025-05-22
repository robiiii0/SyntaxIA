// app/api/correct/route.ts
import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = 'gemini-1.5-flash-latest';

export async function POST(req: NextRequest) {
  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not configured.');
    return NextResponse.json({ error: 'Configuration serveur incomplète. La clé API est manquante.' }, { status: 500 });
  }

  try {
    const { textToCorrect } = await req.json();

    if (!textToCorrect || typeof textToCorrect !== 'string' || !textToCorrect.trim()) {
      return NextResponse.json({ error: 'Texte d\'entrée invalide ou manquant.' }, { status: 400 });
    }

    const prompt = `Corrige l'orthographe et la grammaire du texte suivant. Améliore la clarté si possible, mais ne change pas le sens original. Renvoie uniquement le texte corrigé, sans aucune introduction ni explication supplémentaire.
    Texte original :
    ---
    ${textToCorrect}
    ---
    Texte corrigé :`;

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 1024,
      }
    };

    const geminiResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json().catch(() => ({ error: { message: geminiResponse.statusText } }));
      console.error('Gemini API Error - Status:', geminiResponse.status, 'Data:', errorData);
      return NextResponse.json({ error: `Erreur de l'API Gemini: ${errorData.error?.message || geminiResponse.statusText}` }, { status: geminiResponse.status });
    }

    const data = await geminiResponse.json();
    
    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
      const correctedText = data.candidates[0].content.parts[0].text.trim();
      return NextResponse.json({ correctedText });
    } else if (data.promptFeedback && data.promptFeedback.blockReason) {
        console.warn('Gemini Prompt Blocked:', data.promptFeedback);
        return NextResponse.json({ error: `Votre texte n'a pas pu être traité car il a été bloqué par le filtre de contenu (Raison: ${data.promptFeedback.blockReason}). Veuillez reformuler.`, details: data.promptFeedback.safetyRatings }, { status: 400 });
    } else {
      console.error('Structure de réponse Gemini inattendue:', data);
      return NextResponse.json({ error: 'Impossible d\'extraire le texte corrigé de la réponse de l\'API.' }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Erreur dans /api/correct (hors appel Gemini):', error);
    const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue lors du traitement de votre requête.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}