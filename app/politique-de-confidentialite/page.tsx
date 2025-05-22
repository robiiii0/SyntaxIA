// app/politique-de-confidentialite/page.tsx
export default function PolitiqueDeConfidentialitePage() {
  return (
    <main className="container mx-auto max-w-3xl w-full bg-slate-800/60 backdrop-blur-lg shadow-2xl rounded-xl p-6 md:p-10 my-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-gray-100 to-slate-300">
        Politique de Confidentialité
      </h1>
      <div className="space-y-4 text-slate-300">
        <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        <p>
          Bienvenue sur SyntaxIA. Votre vie privée est importante pour nous. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web.
        </p>
        <h2 className="text-xl font-semibold text-slate-200 pt-4">Collecte et Utilisation des Informations</h2>
        <p>
          Nous ne collectons pas d'informations personnelles identifiables lorsque vous utilisez notre service de correction orthographique. Le texte que vous soumettez pour correction est envoyé à l'API de Google Gemini pour traitement et n'est pas stocké par SyntaxIA après la correction.
        </p>
        
        <h2 className="text-xl font-semibold text-slate-200 pt-4">Cookies</h2>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. Un cookie est un petit fichier de données stocké sur votre appareil. Lorsque vous visitez notre site pour la première fois, nous vous informons de l'utilisation de cookies via une bannière et demandons votre consentement pour les cookies non essentiels.
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li><strong>Cookies Essentiels :</strong> Certains cookies sont nécessaires au bon fonctionnement du site, par exemple, pour se souvenir de votre consentement concernant les cookies. Ces cookies ne nécessitent pas de consentement préalable mais vous en êtes informé.</li>
          <li>
            <strong>Cookies Publicitaires (Google AdSense) :</strong> Si vous donnez votre consentement, nous et nos partenaires publicitaires (tels que Google AdSense) pouvons utiliser des cookies pour collecter des informations sur vos visites sur ce site et d'autres sites afin de vous fournir des publicités plus pertinentes concernant des biens et services susceptibles de vous intéresser. Google utilise des cookies pour diffuser des annonces sur notre site. L'utilisation du cookie DoubleClick DART par Google lui permet de diffuser des annonces aux utilisateurs en fonction de leur visite sur notre site et d'autres sites sur Internet. Les utilisateurs peuvent désactiver l'utilisation du cookie DART en consultant la <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-400">page des règles de confidentialité et des conditions d'utilisation de Google relatives à la publicité</a>.
          </li>
          {/* Vous pouvez ajouter des sections pour les cookies d'analyse si vous en utilisez */}
          {/* <li><strong>Cookies d'Analyse :</strong> Avec votre consentement, nous pourrions utiliser des cookies pour analyser le trafic du site afin d'améliorer nos services (par exemple, via Google Analytics).</li> */}
        </ul>
        <p className="mt-2">
          Vous pouvez gérer ou supprimer les cookies via les paramètres de votre navigateur. Vous pouvez également gérer vos préférences publicitaires et refuser la publicité ciblée via des outils tels que <a href="https://www.youronlinechoices.com/fr/controler-ses-cookies/" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-400">YourOnlineChoices</a> (pour l'Europe) ou les <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-400">paramètres des annonces Google</a>. Veuillez noter que la désactivation de certains cookies peut affecter la fonctionnalité du site.
        </p>

        <h2 className="text-xl font-semibold text-slate-200 pt-4">Publicité</h2>
        <p>
            Ce site peut afficher des publicités fournies par Google AdSense. Comme mentionné ci-dessus, ces publicités peuvent utiliser des cookies pour personnaliser le contenu publicitaire. Nous nous efforçons de veiller à ce que les publicités soient pertinentes et non intrusives. Votre consentement pour les cookies publicitaires sera demandé avant leur activation.
        </p>
        
        {/* ... (autres sections : Sécurité, Liens, Modifications, Nous Contacter) ... */}
        <h2 className="text-xl font-semibold text-slate-200 pt-4">Sécurité</h2>
        <p>
          Nous nous efforçons de protéger vos informations. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée à 100 %.
        </p>
        <h2 className="text-xl font-semibold text-slate-200 pt-4">Liens vers d'Autres Sites</h2>
        <p>
          Notre site peut contenir des liens vers d'autres sites qui ne sont pas exploités par nous (par exemple, Google Gemini, les sites des annonceurs). Si vous cliquez sur un lien tiers, vous serez dirigé vers le site de ce tiers. Nous vous conseillons vivement de consulter la politique de confidentialité de chaque site que vous visitez.
        </p>
        <h2 className="text-xl font-semibold text-slate-200 pt-4">Modifications de cette Politique de Confidentialité</h2>
        <p>
          Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous notifierons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de "Dernière mise à jour". Il vous est conseillé de consulter cette politique de confidentialité périodiquement pour tout changement.
        </p>
        <h2 className="text-xl font-semibold text-slate-200 pt-4">Nous Contacter</h2>
        <p>
          Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à : [Votre Adresse Email de Contact - Si vous en avez une à fournir]
        </p>
      </div>
    </main>
  );
}