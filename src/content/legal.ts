type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPage = {
  intro: string;
  updated: string;
  sections: LegalSection[];
};

type Language = 'en' | 'fr';

export const legalContent: Record<Language, Record<string, LegalPage>> = {
  en: {
    about: {
      updated: 'November 27, 2026',
      intro: 'NeuralScope is an independent editorial website dedicated to helping people understand, evaluate and use artificial intelligence tools.',
      sections: [
        {
          heading: 'Our mission',
          paragraphs: [
            'Artificial intelligence tools are evolving quickly. Choosing the right solution can be difficult when features, pricing and limitations are constantly changing.',
            'Our mission is to make those choices easier through clear explanations, practical tutorials, independent reviews and useful comparisons.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'We cover AI chatbots and assistants, image and video tools, writing and content solutions, business and automation platforms, and productivity tools.',
            'Our editorial formats include hands-on reviews, comparisons, tutorials, explainers and practical guides.',
          ],
        },
        {
          heading: 'Our approach',
          paragraphs: [
            'We aim to provide useful, original and well-researched information. We distinguish verified information from opinion, explain relevant limitations and update content when important information changes.',
            'Our coverage is independent. A tool being featured does not mean that NeuralScope endorses it or guarantees its performance.',
          ],
        },
        {
          heading: 'Who we serve',
          paragraphs: [
            'NeuralScope is written for an international audience, including individuals, creators, students, entrepreneurs and professionals who want to make informed decisions about AI tools.',
            'We publish in English and French. Our goal is to make practical information accessible to readers with different levels of technical experience.',
          ],
        },
        {
          heading: 'Contact and feedback',
          paragraphs: [
            'We welcome corrections, suggestions, questions and relevant partnership proposals. You can contact the project through the public GitHub repository and its issue tracker.',
          ],
        },
      ],
    },
    contact: {
      updated: 'November 27, 2026',
      intro: 'Have a question, spotted an error or want to discuss a relevant partnership? We welcome thoughtful feedback.',
      sections: [
        {
          heading: 'Corrections and editorial feedback',
          paragraphs: [
            'If you find an inaccurate statement, outdated price, broken link or missing context, please tell us which page is concerned and include a reliable source whenever possible.',
          ],
        },
        {
          heading: 'Partnership enquiries',
          paragraphs: [
            'For product demonstrations, review requests or other professional enquiries, explain your proposal clearly. Editorial coverage remains subject to our independent editorial standards.',
          ],
        },
        {
          heading: 'How to reach us',
          paragraphs: [
            'Until a dedicated contact email or contact form is published, you can send a message through the NeuralScope public GitHub repository. Please do not include passwords, payment details or other sensitive personal information.',
          ],
        },
      ],
    },
    privacy: {
      updated: 'November 27, 2026',
      intro: 'This Privacy Policy explains what information may be processed when you visit NeuralScope and how that information is handled.',
      sections: [
        {
          heading: 'Who is responsible for this website?',
          paragraphs: [
            'NeuralScope is an independent editorial website about artificial intelligence tools. For privacy-related questions, please use the contact method described on our Contact page.',
          ],
        },
        {
          heading: 'Information we collect',
          paragraphs: [
            'NeuralScope does not currently offer user accounts, newsletter subscriptions, payment processing or a contact form. We do not intentionally ask visitors to submit personal information through the website.',
            'Our hosting provider, GitHub Pages, may process technical information such as IP addresses, browser details and server logs when delivering website pages. Such processing is governed by the provider policies and infrastructure.',
          ],
        },
        {
          heading: 'Cookies and similar technologies',
          paragraphs: [
            'The current version of NeuralScope does not intentionally use advertising cookies, analytics cookies or third-party tracking tools. Technical services involved in delivering the website may operate according to their own technical requirements and policies.',
            'If we introduce analytics, advertising or other technologies that use cookies or similar identifiers, this policy will be updated to explain their purpose and relevant choices.',
          ],
        },
        {
          heading: 'Advertising and affiliate links',
          paragraphs: [
            'NeuralScope may apply to participate in Google AdSense in the future. If advertising is introduced, advertising partners may use cookies or similar technologies to serve or measure advertisements, subject to applicable rules and user choices.',
            'We may also publish affiliate links in the future. If a reader makes a qualifying purchase through such a link, NeuralScope may receive a commission at no additional cost to the reader. Relevant disclosures will appear alongside applicable content.',
          ],
        },
        {
          heading: 'External websites',
          paragraphs: [
            'Our articles may link to third-party websites, products and services. We do not control their content, security or privacy practices. Please review the policies of those websites before sharing information with them.',
          ],
        },
        {
          heading: 'Data retention and security',
          paragraphs: [
            'We do not maintain a visitor account database or a mailing list at this time. Technical logs, if processed by the hosting provider, are subject to that provider’s retention and security practices.',
            'No website or online transmission can be guaranteed to be completely secure. Avoid sending confidential information through public channels.',
          ],
        },
        {
          heading: 'Your privacy rights',
          paragraphs: [
            'Depending on your location, you may have rights to access, correct, delete or restrict the processing of personal information. Requests should be sent using the contact method on our Contact page. We will assess requests in light of applicable law and the information actually held.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paragraphs: [
            'This policy may change as the website introduces new features or services. The date at the top of this page indicates when it was last updated.',
          ],
        },
      ],
    },
    terms: {
      updated: 'November 27, 2026',
      intro: 'These Terms of Use apply to your access to and use of the NeuralScope website. By using the website, you agree to these terms.',
      sections: [
        {
          heading: 'Purpose of the website',
          paragraphs: [
            'NeuralScope publishes educational and informational content about artificial intelligence tools, including reviews, comparisons, tutorials and guides.',
            'The content is provided for general information only. It is not professional, legal, financial, medical or technical advice tailored to your circumstances.',
          ],
        },
        {
          heading: 'Accuracy and availability',
          paragraphs: [
            'We make reasonable efforts to publish useful and accurate information. However, AI products, features, availability and prices can change without notice. We do not guarantee that every page is complete, current or error-free.',
            'We may modify, suspend or remove content or website features at any time.',
          ],
        },
        {
          heading: 'Acceptable use',
          paragraphs: [
            'You agree not to misuse the website, attempt to disrupt its operation, introduce malicious code, or use the website in a way that violates applicable laws or the rights of others.',
            'You must not attempt unauthorized access to the website, its hosting infrastructure or related systems.',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'Unless otherwise stated, original text, design elements and branding published by NeuralScope belong to their respective rights holders and may not be reproduced or redistributed commercially without permission.',
            'Third-party product names, logos and trademarks belong to their respective owners. Their appearance on NeuralScope does not imply sponsorship or endorsement.',
          ],
        },
        {
          heading: 'Third-party products and links',
          paragraphs: [
            'References to third-party tools and websites are provided for convenience and information. We do not own or control those services and are not responsible for their terms, availability, security, pricing or performance.',
            'You are responsible for reviewing the terms and privacy policies of any third-party service before using it.',
          ],
        },
        {
          heading: 'Limitation of liability',
          paragraphs: [
            'To the extent permitted by applicable law, NeuralScope is not liable for losses arising from reliance on website content, interruptions in availability, or the use of third-party products and services.',
            'Nothing in these terms excludes liability that cannot lawfully be excluded under applicable law.',
          ],
        },
        {
          heading: 'Changes and contact',
          paragraphs: [
            'We may update these terms as the website develops. Continued use of the website after an update means that you accept the revised terms, to the extent permitted by applicable law.',
            'For questions about these terms, use the contact method described on our Contact page.',
          ],
        },
      ],
    },
    editorial: {
      updated: 'November 27, 2026',
      intro: 'Our editorial policy explains how NeuralScope researches, evaluates and publishes information about artificial intelligence tools.',
      sections: [
        {
          heading: 'Editorial independence',
          paragraphs: [
            'NeuralScope aims to provide independent information that helps readers make informed decisions. Editorial conclusions are not for sale.',
            'A product mention, review or comparison does not automatically mean that we recommend the product.',
          ],
        },
        {
          heading: 'Research and testing',
          paragraphs: [
            'When practical, we examine tools directly, review their official documentation, test relevant features and assess their limitations. We consider factors such as usability, capabilities, pricing, availability and intended audience.',
            'When direct testing is not possible, we rely on identifiable sources such as official product documentation and clearly distinguish research-based coverage from hands-on testing.',
          ],
        },
        {
          heading: 'Sources and accuracy',
          paragraphs: [
            'We prioritize primary sources, including official documentation, product pages, pricing pages and announcements. We use additional sources when they provide relevant context or independent evidence.',
            'We aim to identify important sources and dates, especially when discussing rapidly changing features or prices. Readers can report errors through our Contact page.',
          ],
        },
        {
          heading: 'Reviews and comparisons',
          paragraphs: [
            'Reviews and comparisons should explain the criteria used, meaningful advantages, limitations and relevant pricing information. We aim to compare products fairly and avoid unsupported claims.',
            'Where a conclusion depends on a particular use case, we explain that context rather than presenting one tool as universally best.',
          ],
        },
        {
          heading: 'Artificial intelligence in our workflow',
          paragraphs: [
            'AI tools may assist with research organization, drafting or editing. They do not replace editorial responsibility. Published material must be reviewed, checked and improved by a human before publication.',
            'We do not aim to publish large volumes of unreviewed or repetitive AI-generated pages.',
          ],
        },
        {
          heading: 'Corrections and updates',
          paragraphs: [
            'We correct material errors when they are identified and update articles when significant product changes make the information outdated. The publication or update date should help readers understand the freshness of an article.',
          ],
        },
        {
          heading: 'Affiliate links and commercial relationships',
          paragraphs: [
            'NeuralScope may use affiliate links or display advertising in the future. Where a commercial relationship applies, we aim to disclose it clearly near the relevant content.',
            'Commercial relationships do not determine our test results, ratings or editorial conclusions. We aim to cover tools based on their relevance and usefulness to readers.',
          ],
        },
      ],
    },
  },
  fr: {
    about: {
      updated: '27 novembre 2026',
      intro: 'NeuralScope est un média éditorial indépendant consacré aux outils d’intelligence artificielle. Notre objectif est d’aider chacun à comprendre ces outils, à les évaluer et à les utiliser de manière éclairée.',
      sections: [
        {
          heading: 'Notre mission',
          paragraphs: [
            'Les outils d’intelligence artificielle évoluent rapidement. Il peut être difficile de choisir une solution lorsque les fonctionnalités, les tarifs et les limites changent constamment.',
            'Notre mission est de faciliter ces choix grâce à des explications claires, des tutoriels pratiques, des tests indépendants et des comparatifs utiles.',
          ],
        },
        {
          heading: 'Nos contenus',
          paragraphs: [
            'Nous couvrons les chatbots et assistants IA, les outils d’image et de vidéo, la rédaction et la création de contenu, le business et l’automatisation, ainsi que la productivité.',
            'Nos formats comprennent des tests pratiques, des comparatifs, des tutoriels, des explications et des guides.',
          ],
        },
        {
          heading: 'Notre approche',
          paragraphs: [
            'Nous cherchons à proposer des informations utiles, originales et documentées. Nous distinguons les informations vérifiées des opinions, expliquons les limites pertinentes et actualisons les contenus lorsque des changements importants surviennent.',
            'Notre couverture éditoriale est indépendante. La présentation d’un outil ne signifie pas que NeuralScope le cautionne ou garantit ses performances.',
          ],
        },
        {
          heading: 'À qui nous nous adressons',
          paragraphs: [
            'NeuralScope s’adresse à un public international : particuliers, créateurs, étudiants, entrepreneurs et professionnels souhaitant prendre des décisions éclairées concernant les outils d’IA.',
            'Nous publions en français et en anglais afin de rendre les informations pratiques accessibles à des lecteurs ayant différents niveaux d’expérience technique.',
          ],
        },
        {
          heading: 'Contact et retours',
          paragraphs: [
            'Nous accueillons les corrections, suggestions, questions et propositions de partenariat pertinentes. Vous pouvez contacter le projet via le dépôt public GitHub et son système de suivi des problèmes.',
          ],
        },
      ],
    },
    contact: {
      updated: '27 novembre 2026',
      intro: 'Une question, une erreur repérée ou une proposition de partenariat pertinente ? Nous sommes ouverts aux retours constructifs.',
      sections: [
        {
          heading: 'Corrections et retours éditoriaux',
          paragraphs: [
            'Si vous repérez une information inexacte, un tarif dépassé, un lien cassé ou un manque de contexte, indiquez-nous la page concernée et ajoutez si possible une source fiable.',
          ],
        },
        {
          heading: 'Demandes de partenariat',
          paragraphs: [
            'Pour une démonstration de produit, une demande de test ou une autre proposition professionnelle, présentez clairement votre demande. Toute couverture éditoriale reste soumise à nos règles d’indépendance.',
          ],
        },
        {
          heading: 'Nous contacter',
          paragraphs: [
            'En attendant la mise en place d’une adresse e-mail ou d’un formulaire de contact dédié, vous pouvez envoyer un message via le dépôt public GitHub de NeuralScope. N’y communiquez pas de mots de passe, de coordonnées bancaires ni d’autres informations personnelles sensibles.',
          ],
        },
      ],
    },
    privacy: {
      updated: '27 novembre 2026',
      intro: 'Cette politique de confidentialité explique quelles informations peuvent être traitées lors de votre visite sur NeuralScope et comment elles sont gérées.',
      sections: [
        {
          heading: 'Qui est responsable de ce site ?',
          paragraphs: [
            'NeuralScope est un média éditorial indépendant consacré aux outils d’intelligence artificielle. Pour toute question relative à la confidentialité, utilisez le moyen de contact indiqué sur notre page Contact.',
          ],
        },
        {
          heading: 'Informations collectées',
          paragraphs: [
            'La version actuelle de NeuralScope ne propose pas de comptes utilisateurs, d’abonnement à une newsletter, de paiement ni de formulaire de contact. Nous ne demandons pas volontairement aux visiteurs de transmettre des informations personnelles via le site.',
            'Notre hébergeur, GitHub Pages, peut traiter des informations techniques telles que les adresses IP, les caractéristiques du navigateur et les journaux de serveur lors de la diffusion des pages. Ce traitement relève des politiques et de l’infrastructure du fournisseur.',
          ],
        },
        {
          heading: 'Cookies et technologies similaires',
          paragraphs: [
            'La version actuelle de NeuralScope n’utilise pas volontairement de cookies publicitaires, de cookies analytiques ni d’outils de suivi tiers. Les services techniques nécessaires à la diffusion du site peuvent fonctionner selon leurs propres exigences et politiques.',
            'Si nous ajoutons des outils d’analyse, de publicité ou d’autres technologies utilisant des cookies ou identifiants similaires, cette politique sera mise à jour pour expliquer leur finalité et les choix disponibles.',
          ],
        },
        {
          heading: 'Publicité et liens affiliés',
          paragraphs: [
            'NeuralScope pourra à l’avenir demander à participer au programme Google AdSense. Si des publicités sont mises en place, les partenaires publicitaires pourront utiliser des cookies ou technologies similaires pour diffuser ou mesurer les annonces, conformément aux règles applicables et aux choix des utilisateurs.',
            'Nous pourrons également publier des liens affiliés. Si un lecteur réalise un achat éligible via un tel lien, NeuralScope pourra percevoir une commission sans coût supplémentaire pour le lecteur. Les contenus concernés feront l’objet d’une mention appropriée.',
          ],
        },
        {
          heading: 'Sites externes',
          paragraphs: [
            'Nos articles peuvent contenir des liens vers des sites, produits et services tiers. Nous ne contrôlons ni leur contenu, ni leur sécurité, ni leurs pratiques de confidentialité. Consultez leurs politiques avant de leur transmettre des informations.',
          ],
        },
        {
          heading: 'Conservation et sécurité',
          paragraphs: [
            'Nous ne gérons actuellement aucune base de comptes visiteurs ni liste de diffusion. Les journaux techniques éventuellement traités par l’hébergeur sont soumis à ses propres pratiques de conservation et de sécurité.',
            'Aucun site ni aucune transmission en ligne ne peut être garanti comme totalement sécurisé. Évitez de transmettre des informations confidentielles par des canaux publics.',
          ],
        },
        {
          heading: 'Vos droits',
          paragraphs: [
            'Selon votre lieu de résidence, vous pouvez disposer de droits d’accès, de rectification, d’effacement ou de limitation du traitement de vos informations personnelles. Les demandes peuvent être envoyées par le moyen indiqué sur notre page Contact. Elles seront examinées au regard du droit applicable et des informations effectivement détenues.',
          ],
        },
        {
          heading: 'Modifications de cette politique',
          paragraphs: [
            'Cette politique pourra évoluer avec l’ajout de nouvelles fonctionnalités ou de nouveaux services. La date affichée en haut de page indique sa dernière mise à jour.',
          ],
        },
      ],
    },
    terms: {
      updated: '27 novembre 2026',
      intro: 'Les présentes conditions régissent votre accès au site NeuralScope et son utilisation. En utilisant le site, vous acceptez ces conditions.',
      sections: [
        {
          heading: 'Objet du site',
          paragraphs: [
            'NeuralScope publie des contenus éducatifs et informatifs sur les outils d’intelligence artificielle : tests, comparatifs, tutoriels et guides.',
            'Ces contenus sont fournis à titre d’information générale. Ils ne constituent pas un conseil professionnel, juridique, financier, médical ou technique adapté à votre situation.',
          ],
        },
        {
          heading: 'Exactitude et disponibilité',
          paragraphs: [
            'Nous faisons des efforts raisonnables pour publier des informations utiles et exactes. Toutefois, les produits d’IA, leurs fonctionnalités, leur disponibilité et leurs tarifs peuvent changer sans préavis. Nous ne garantissons pas que chaque page soit complète, à jour ou exempte d’erreurs.',
            'Nous pouvons modifier, suspendre ou retirer des contenus ou des fonctionnalités à tout moment.',
          ],
        },
        {
          heading: 'Utilisation acceptable',
          paragraphs: [
            'Vous vous engagez à ne pas détourner l’utilisation du site, perturber son fonctionnement, introduire de code malveillant ou l’utiliser d’une manière contraire aux lois applicables ou aux droits d’autrui.',
            'Vous ne devez pas tenter d’accéder sans autorisation au site, à son infrastructure d’hébergement ou aux systèmes associés.',
          ],
        },
        {
          heading: 'Propriété intellectuelle',
          paragraphs: [
            'Sauf indication contraire, les textes originaux, éléments de design et signes distinctifs publiés par NeuralScope appartiennent à leurs titulaires respectifs et ne peuvent être reproduits ou redistribués à des fins commerciales sans autorisation.',
            'Les noms de produits, logos et marques de tiers appartiennent à leurs propriétaires respectifs. Leur présence sur NeuralScope ne signifie pas qu’ils nous sponsorisent ou nous recommandent.',
          ],
        },
        {
          heading: 'Produits et liens tiers',
          paragraphs: [
            'Les références à des outils et sites tiers sont fournies à titre informatif et pratique. Nous ne possédons ni ne contrôlons ces services et ne sommes pas responsables de leurs conditions, disponibilité, sécurité, tarifs ou performances.',
            'Vous êtes responsable de la lecture des conditions et politiques de confidentialité des services tiers avant leur utilisation.',
          ],
        },
        {
          heading: 'Limitation de responsabilité',
          paragraphs: [
            'Dans les limites autorisées par le droit applicable, NeuralScope ne saurait être tenu responsable des pertes résultant de l’utilisation des contenus du site, des interruptions de disponibilité ou de l’utilisation de produits et services tiers.',
            'Aucune disposition de ces conditions n’exclut une responsabilité qui ne peut légalement être exclue.',
          ],
        },
        {
          heading: 'Modifications et contact',
          paragraphs: [
            'Nous pouvons mettre à jour ces conditions à mesure que le site évolue. La poursuite de l’utilisation du site après une mise à jour vaut acceptation des conditions révisées, dans les limites autorisées par le droit applicable.',
            'Pour toute question concernant ces conditions, utilisez le moyen de contact indiqué sur notre page Contact.',
          ],
        },
      ],
    },
    editorial: {
      updated: '27 novembre 2026',
      intro: 'Notre politique éditoriale explique comment NeuralScope recherche, évalue et publie des informations sur les outils d’intelligence artificielle.',
      sections: [
        {
          heading: 'Indépendance éditoriale',
          paragraphs: [
            'NeuralScope souhaite fournir des informations indépendantes pour aider ses lecteurs à prendre des décisions éclairées. Les conclusions éditoriales ne sont pas à vendre.',
            'La présentation, le test ou la comparaison d’un produit ne signifie pas automatiquement que nous le recommandons.',
          ],
        },
        {
          heading: 'Recherche et tests',
          paragraphs: [
            'Lorsque cela est possible, nous examinons directement les outils, consultons leur documentation officielle, testons les fonctionnalités pertinentes et évaluons leurs limites. Nous prenons notamment en compte la facilité d’utilisation, les capacités, les tarifs, la disponibilité et le public visé.',
            'Lorsque le test direct n’est pas possible, nous nous appuyons sur des sources identifiables, comme la documentation officielle, et distinguons clairement les recherches documentaires des tests pratiques.',
          ],
        },
        {
          heading: 'Sources et exactitude',
          paragraphs: [
            'Nous privilégions les sources primaires : documentation officielle, pages produits, grilles tarifaires et annonces des éditeurs. Nous utilisons d’autres sources lorsqu’elles apportent un contexte pertinent ou des éléments indépendants.',
            'Nous cherchons à identifier les sources importantes et leurs dates, en particulier pour les fonctionnalités et tarifs susceptibles d’évoluer rapidement. Les lecteurs peuvent signaler les erreurs via notre page Contact.',
          ],
        },
        {
          heading: 'Tests et comparatifs',
          paragraphs: [
            'Nos tests et comparatifs doivent expliquer les critères utilisés, les avantages significatifs, les limites et les informations tarifaires pertinentes. Nous cherchons à comparer les produits équitablement et à éviter les affirmations non vérifiées.',
            'Lorsqu’une conclusion dépend d’un usage particulier, nous précisons ce contexte au lieu de présenter un outil comme le meilleur dans toutes les situations.',
          ],
        },
        {
          heading: 'Intelligence artificielle dans notre travail',
          paragraphs: [
            'Des outils d’IA peuvent nous aider à organiser des recherches, préparer des brouillons ou effectuer des corrections. Ils ne remplacent pas la responsabilité éditoriale. Tout contenu publié doit être relu, vérifié et amélioré par un humain avant publication.',
            'Nous ne cherchons pas à publier en masse des pages générées par IA sans vérification ou répétitives.',
          ],
        },
        {
          heading: 'Corrections et mises à jour',
          paragraphs: [
            'Nous corrigeons les erreurs importantes lorsqu’elles sont identifiées et actualisons les articles lorsque des changements significatifs rendent les informations obsolètes. La date de publication ou de mise à jour doit aider les lecteurs à évaluer la fraîcheur d’un article.',
          ],
        },
        {
          heading: 'Liens affiliés et relations commerciales',
          paragraphs: [
            'NeuralScope pourra utiliser des liens affiliés ou afficher des publicités à l’avenir. Lorsqu’une relation commerciale s’applique, nous chercherons à la signaler clairement à proximité du contenu concerné.',
            'Les relations commerciales ne déterminent pas nos résultats de tests, nos évaluations ni nos conclusions éditoriales. Nous souhaitons couvrir les outils selon leur pertinence et leur utilité pour les lecteurs.',
          ],
        },
      ],
    },
  },
};