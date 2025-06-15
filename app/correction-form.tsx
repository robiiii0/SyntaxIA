// app/correction-form.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  SparklesIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function CorrectionForm() {
  const [inputText, setInputText] = useState<string>("");
  const [correctedText, setCorrectedText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputText.trim()) {
      setError("Veuillez entrer du texte à corriger.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setCorrectedText("");
    setIsCopied(false);

    try {
      const response = await fetch("/api/correct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ textToCorrect: inputText }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Une erreur est survenue lors de la correction."
        );
      }

      setCorrectedText(data.correctedText);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === "string") {
        setError(err);
      } else {
        setError("Une erreur inattendue est survenue.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!correctedText) return;
    navigator.clipboard
      .writeText(correctedText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        setError("Impossible de copier le texte.");
      });
  };

  return (
    <main className="container mx-auto max-w-3xl w-full bg-slate-800/60 backdrop-blur-lg shadow-2xl rounded-xl p-6 md:p-10 transition-all duration-500 hover:shadow-lg hover:shadow-sky-500/20">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-gray-100 to-slate-300">
          Correcteur Orthographique IA
        </h1>
        <p className="text-slate-300 mt-2 text-lg">
          Élevez la qualité de vos textes, sans effort.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="inputText"
            className="block text-sm font-medium text-slate-300 mb-1"
          >
            Texte à analyser :
          </label>
          <textarea
            id="inputText"
            value={inputText}
            onChange={handleInputChange}
            rows={6}
            className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder-slate-400 text-slate-100 transition-colors duration-300"
            placeholder="Écrivez ou collez votre texte ici..."
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !inputText.trim()}
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-all duration-300 group"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Analyse en cours...
            </>
          ) : (
            <>
              <SparklesIcon className="h-5 w-5 mr-2 transform group-hover:scale-110 transition-transform duration-300" />
              Corriger et Améliorer
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-900/30 border border-red-700 text-red-300 rounded-lg flex items-center">
          <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-red-400" />
          {error}
        </div>
      )}

      {correctedText && (
        <div className="mt-8 pt-6 border-t border-slate-700">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-slate-200">
              Texte Corrigé :
            </h2>
            <button
              onClick={handleCopy}
              title="Copier le texte corrigé"
              className={`p-2 rounded-md ${
                isCopied
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-slate-600 hover:bg-slate-500"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500 transition-all duration-300 group`}
            >
              {isCopied ? (
                <ClipboardDocumentCheckIcon className="h-5 w-5 text-white transform group-hover:scale-110 transition-transform" />
              ) : (
                <DocumentDuplicateIcon className="h-5 w-5 text-slate-300 group-hover:text-white transform group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
          <div className="w-full p-3 bg-slate-700/70 border border-slate-600 rounded-lg min-h-[100px] whitespace-pre-wrap text-slate-100">
            {correctedText}
          </div>
          {isCopied && (
            <p className="text-sm text-green-400 mt-2 text-right transition-opacity duration-300">
              Copié dans le presse-papiers !
            </p>
          )}
        </div>
      )}
    </main>
  );
}
