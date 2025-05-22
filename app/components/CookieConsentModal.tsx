// components/CookieConsentModal.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Pour le lien vers la politique de confidentialité

export default function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné/refusé
    const consentStatus = localStorage.getItem('cookie_consent_status');
    if (!consentStatus) { // Si aucun statut n'est enregistré, afficher la modale
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (status: 'accepted' | 'declined') => {
    localStorage.setItem('cookie_consent_status', status);
    setIsVisible(false);
    
    if (status === 'accepted') {
      console.log("L'utilisateur a accepté les cookies (pour l'instant, information seulement).");
      // Si vous aviez des cookies analytiques basiques que vous vouliez activer :
      // loadAnalytics();
    } else {
      console.log("L'utilisateur a refusé les cookies (pour l'instant, information seulement).");
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-slate-100 p-4 shadow-lg z-50 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 print:hidden">
      <p className="text-sm sm:mr-4">
        Nous utilisons des cookies pour assurer le bon fonctionnement du site et améliorer votre expérience.
        Consultez notre <Link href="/politique-de-confidentialite" className="underline hover:text-sky-400">politique de confidentialité</Link> pour en savoir plus.
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => handleConsent('accepted')}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-md transition-colors"
        >
          Compris !
        </button>
        {/* Optionnel: bouton Refuser si vous voulez offrir ce choix même pour des cookies "informatifs" */}
        {/* <button
          onClick={() => handleConsent('declined')}
          className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded-md transition-colors"
        >
          Refuser
        </button> */}
      </div>
    </div>
  );
}