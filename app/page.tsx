// app/page.tsx
// PAS de "use client" ici

import type { Metadata } from 'next';
import CorrectionForm from './correction-form'; // Assurez-vous que le chemin est correct

// Metadonnées pour le titre et la description de la page
export const metadata: Metadata = {
  title: 'Correcteur Orthographique Avancé | IA',
  description: 'Améliorez vos écrits avec notre correcteur orthographique IA. Interface épurée au style noir et gris métallisé.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-black text-slate-100 flex flex-col items-center justify-center p-4 selection:bg-sky-500 selection:text-white">
      <CorrectionForm /> {/* Le composant client est rendu ici */}
      <footer className="text-center mt-12 text-slate-400 text-sm">
        <p>Propulsé par <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-400 hover:text-sky-300">Google Gemini</a></p>
        <p>© {new Date().getFullYear()} Robin Chabert. Tous droits réservés.</p>
      </footer>
    </div>
  );
}