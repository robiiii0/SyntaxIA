# SyntaxIA - Votre Assistant de Correction Orthographique et Grammaticale IA

SyntaxIA est une application web moderne construite avec [Next.js](https://nextjs.org) et propulsée par l'intelligence artificielle de [Google Gemini](https://ai.google.dev/). Elle offre aux utilisateurs la possibilité de soumettre un texte et de recevoir instantanément une version corrigée et améliorée, tant au niveau de l'orthographe, de la grammaire que de la clarté syntaxique. Le projet se distingue par un design épuré et une interface utilisateur intuitive au style noir et gris métallisé.

<!-- Optionnel : Ajoutez un lien vers une capture d'écran ici -->
<!-- Exemple : ![Capture d'écran de SyntaxIA](./public/screenshot-syntaxia.png) -->
<!-- Si vous ajoutez une capture, placez-la dans le dossier /public -->

## Fonctionnalités Principales

*   **Correction Intelligente Avancée :** Utilise l'API Gemini de Google pour des corrections précises de l'orthographe, de la grammaire et des suggestions d'amélioration syntaxique.
*   **Interface Utilisateur Réactive :** Développée avec Next.js (App Router) et Tailwind CSS pour une expérience utilisateur fluide et moderne.
*   **Design Élégant et Moderne :** Thème sombre "gris métallisé" pour une meilleure lisibilité et un attrait visuel contemporain.
*   **Copie Facile :** Bouton "Copier" pour récupérer aisément le texte corrigé.
*   **Gestion Claire des Erreurs :** Messages informatifs en cas de problème avec la saisie utilisateur ou la communication avec l'API.
*   **Entièrement Responsive :** Conçue pour s'adapter parfaitement à toutes les tailles d'écran (ordinateurs de bureau, tablettes et mobiles).

## Technologies Utilisées

*   **Framework Frontend :** [Next.js](https://nextjs.org/) (React, App Router)
*   **Styling :** [Tailwind CSS](https://tailwindcss.com/)
*   **Modèle d'IA :** [Google Gemini API](https://ai.google.dev/models/gemini) (par exemple, `gemini-1.5-flash-latest`)
*   **Icônes :** [Heroicons](https://heroicons.com/)
*   **Hébergement  :** [Vercel](https://vercel.com/),

## Variables d'Environnement Nécessaires

Pour exécuter ce projet en local ou le déployer, vous devez configurer la variable d'environnement suivante.
Créez un fichier `.env.local` à la racine de votre projet et ajoutez :

```env
GEMINI_API_KEY=VOTRE_CLE_API_GEMINI_ICI
```
Remplacez `VOTRE_CLE_API_GEMINI_ICI` par votre clé API personnelle obtenue via la [console Google Cloud](https://console.cloud.google.com/).

## Installation et Exécution
1.  Clonez le dépôt :

```bash
git clone git@github.com:robiiii0/SyntaxIA.git
```
2.  Accédez au répertoire du projet :

```bash
cd SyntaxIA
```
3.  Installez les dépendances :

```bash
npm install
```
4.  Démarrez le serveur de développement :

```bash
npm run dev
```
