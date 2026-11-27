export const languages = ['en', 'fr'] as const;
export type Lang = (typeof languages)[number];

// Les 5 catégories éditoriales officielles (navigation principale)
export const navKeys = [
  'ai-tools',
  'ai-automation',
  'ai-content-creation',
  'ai-for-business',
  'ai-guides-news',
] as const;

// Les pages légales et informatives (navigation secondaire / footer)
export const legalKeys = ['privacy', 'terms', 'editorial', 'about', 'contact'] as const;

// Tableau unifié de toutes les pages générées par [...slug].astro
export const pages = [
  { key: 'ai-tools', en: 'ai-tools', fr: 'outils-ia' },
  { key: 'ai-automation', en: 'ai-automation', fr: 'automatisation-ia' },
  { key: 'ai-content-creation', en: 'ai-content-creation', fr: 'creation-contenu-ia' },
  { key: 'ai-for-business', en: 'ai-for-business', fr: 'ia-pour-entreprises' },
  { key: 'ai-guides-news', en: 'ai-guides-news', fr: 'guides-actualites-ia' },
  { key: 'about', en: 'about', fr: 'a-propos' },
  { key: 'contact', en: 'contact', fr: 'contact' },
  { key: 'privacy', en: 'privacy-policy', fr: 'politique-de-confidentialite' },
  { key: 'terms', en: 'terms', fr: 'conditions-utilisation' },
  { key: 'editorial', en: 'editorial-policy', fr: 'politique-editoriale' },
  { key: 'advertise', en: 'advertise', fr: 'sponsorise' },
] as const;

// Table de correspondance catégorie <-> URL (EN/FR)
export const categorySlugs: Record<string, { en: string; fr: string; labelEn: string; labelFr: string }> = {
  'ai-tools': { en: 'ai-tools', fr: 'outils-ia', labelEn: 'AI Tools', labelFr: 'Outils IA' },
  'ai-automation': { en: 'ai-automation', fr: 'automatisation-ia', labelEn: 'AI Automation', labelFr: 'Automatisation IA' },
  'ai-content-creation': { en: 'ai-content-creation', fr: 'creation-contenu-ia', labelEn: 'AI Content Creation', labelFr: 'Création de contenu IA' },
  'ai-for-business': { en: 'ai-for-business', fr: 'ia-pour-entreprises', labelEn: 'AI for Business', labelFr: 'IA pour les entreprises' },
  'ai-guides-news': { en: 'ai-guides-news', fr: 'guides-actualites-ia', labelEn: 'AI Guides & News', labelFr: 'Guides & Actualités IA' },
};

export const ui = {
  en: {
    siteName: 'NeuralScope',
    tagline: 'Understand AI. Choose Better. Work Smarter.',
    metaDescription: 'Independent reviews, comparisons and guides to help you choose the right AI tools.',
    nav: {
      'ai-tools': 'AI Tools',
      'ai-automation': 'Automation',
      'ai-content-creation': 'Content Creation',
      'ai-for-business': 'For Business',
      'ai-guides-news': 'Guides & News',
    },
    hero: {
      title: 'Find the right AI tool, faster.',
      text: 'Independent reviews, side-by-side comparisons and practical tutorials for the AI tools that matter.',
      search: 'Search AI tools, reviews, guides...',
      button: 'Search',
    },
    categoriesTitle: 'Browse by category',
    categories: [
      { name: 'AI Chatbots & Assistants', text: 'Conversational AI for answers, research and daily help.' },
      { name: 'AI Image & Video', text: 'Generators and editors for visuals and motion.' },
      { name: 'AI Writing & Content', text: 'Tools to draft, edit and scale your content.' },
      { name: 'AI Business & Automation', text: 'Automate workflows and support your business.' },
      { name: 'AI Productivity', text: 'Save time on notes, meetings and planning.' },
    ],
    popularTitle: 'Popular AI tools',
    popular: [
      { name: 'ChatGPT', tag: 'Chatbot', text: 'General-purpose AI assistant from OpenAI.' },
      { name: 'Claude', tag: 'Chatbot', text: 'AI assistant from Anthropic.' },
      { name: 'Gemini', tag: 'Chatbot', text: 'AI assistant from Google.' },
      { name: 'Midjourney', tag: 'Image', text: 'AI image generator.' },
    ],
    latestTitle: 'Latest guides',
    latest: [
      'Best free AI chatbots',
      'ChatGPT vs Claude',
      'Gemini vs ChatGPT',
      'Best AI image generators',
    ],
    soon: 'Coming soon',
    footer: {
      about: 'Independent guides to AI tools, written to help you choose with confidence.',
      explore: 'Explore',
      legal: 'Legal',
      rights: 'All rights reserved.',
    },
    pagesText: {
      'ai-tools': { title: 'AI Tools', text: 'Discover, compare and choose the best AI tools for your needs. Reviews, comparisons and recommendations.' },
      'ai-automation': { title: 'AI Automation', text: 'Automate your tasks and workflows with AI. Practical guides and tools to save time.' },
      'ai-content-creation': { title: 'AI Content Creation', text: 'Create videos, images and content with AI. Generators, editors and creative workflows.' },
      'ai-for-business': { title: 'AI for Business', text: 'AI applications for companies and entrepreneurs. Strategy, tools and case studies.' },
      'ai-guides-news': { title: 'AI Guides & News', text: 'Tutorials, explanations and news about artificial intelligence.' },
      about: { title: 'About NeuralScope', text: 'NeuralScope is an independent guide to AI tools, built to help you choose with confidence.' },
      contact: { title: 'Contact', text: 'Questions, corrections or partnership ideas? Get in touch with the NeuralScope team.' },
      privacy: { title: 'Privacy Policy', text: 'How NeuralScope collects, uses and protects your information.' },
      terms: { title: 'Terms of Use', text: 'The rules for using the NeuralScope website.' },
      editorial: { title: 'Editorial Policy', text: 'How we research, test and review AI tools, and how we stay independent.' },
      advertise: { title: 'Advertise on NeuralScope', text: 'Reach a highly qualified audience of freelancers, entrepreneurs, and professionals actively looking for AI tools. We offer sponsored articles, newsletter placements, and display advertising. Contact us to receive our media kit.' },
    },
  },
  fr: {
    siteName: 'NeuralScope',
    tagline: "Comprendre l'IA. Mieux choisir. Travailler plus intelligemment.",
    metaDescription: "Tests, comparatifs et guides indépendants pour choisir les bons outils d'intelligence artificielle.",
    nav: {
      'ai-tools': 'Outils IA',
      'ai-automation': 'Automatisation',
      'ai-content-creation': 'Création',
      'ai-for-business': 'Entreprises',
      'ai-guides-news': 'Guides & Actus',
    },
    hero: {
      title: "Trouvez plus vite le bon outil d'IA.",
      text: "Tests indépendants, comparatifs côte à côte et tutoriels pratiques pour les outils d'IA qui comptent.",
      search: "Rechercher un outil IA, un test, un guide...",
      button: 'Rechercher',
    },
    categoriesTitle: 'Parcourir par catégorie',
    categories: [
      { name: 'Chatbots et assistants IA', text: 'IA conversationnelle pour répondre, rechercher et aider au quotidien.' },
      { name: 'Image et vidéo IA', text: 'Générateurs et éditeurs pour créer visuels et vidéos.' },
      { name: 'Rédaction et contenu IA', text: 'Outils pour rédiger, corriger et produire du contenu.' },
      { name: 'Business et automatisation IA', text: 'Automatisez vos processus et soutenez votre activité.' },
      { name: 'Productivité IA', text: 'Gagnez du temps sur les notes, réunions et plannings.' },
    ],
    popularTitle: "Outils d'IA populaires",
    popular: [
      { name: 'ChatGPT', tag: 'Chatbot', text: "Assistant IA polyvalent d'OpenAI." },
      { name: 'Claude', tag: 'Chatbot', text: "Assistant IA d'Anthropic." },
      { name: 'Gemini', tag: 'Chatbot', text: 'Assistant IA de Google.' },
      { name: 'Midjourney', tag: 'Image', text: "Générateur d'images IA." },
    ],
    latestTitle: 'Derniers guides',
    latest: [
      'Les meilleurs chatbots IA gratuits',
      'ChatGPT contre Claude',
      'Gemini contre ChatGPT',
      "Les meilleurs générateurs d'images IA",
    ],
    soon: 'Bientôt disponible',
    footer: {
      about: "Des guides indépendants sur les outils d'IA, pour choisir en confiance.",
      explore: 'Explorer',
      legal: 'Mentions légales',
      rights: 'Tous droits réservés.',
    },
    pagesText: {
      'ai-tools': { title: 'Outils IA', text: "Découvrez, comparez et choisissez les meilleurs outils d'IA pour vos besoins. Tests, comparatifs et recommandations." },
      'ai-automation': { title: 'Automatisation IA', text: "Automatisez vos tâches et workflows avec l'IA. Guides pratiques et outils pour gagner du temps." },
      'ai-content-creation': { title: 'Création de contenu IA', text: "Créez des vidéos, des images et du contenu avec l'IA. Générateurs, éditeurs et workflows créatifs." },
      'ai-for-business': { title: 'IA pour les entreprises', text: "Applications de l'IA pour les entreprises et les entrepreneurs. Stratégie, outils et cas d'usage." },
      'ai-guides-news': { title: 'Guides & Actualités IA', text: "Tutoriels, explications et actualités sur l'intelligence artificielle." },
      about: { title: 'À propos de NeuralScope', text: "NeuralScope est un guide indépendant des outils d'IA, conçu pour vous aider à choisir en confiance." },
      contact: { title: 'Contact', text: "Une question, une correction ou une idée de partenariat ? Contactez l'équipe NeuralScope." },
      privacy: { title: 'Politique de confidentialité', text: 'Comment NeuralScope collecte, utilise et protège vos informations.' },
      terms: { title: "Conditions d'utilisation", text: "Les règles d'utilisation du site NeuralScope." },
      editorial: { title: 'Politique éditoriale', text: "Comment nous recherchons, testons et évaluons les outils d'IA, et comment nous restons indépendants." },
      advertise: { title: 'Sponsoriser NeuralScope', text: 'Touchez une audience hautement qualifiée d'indépendants, d'entrepreneurs et de professionnels à la recherche d'outils IA. Nous proposons des articles sponsorisés, des placements dans la newsletter et de la publicité display. Contactez-nous pour recevoir notre media kit.' },
    },
  },
} as const;