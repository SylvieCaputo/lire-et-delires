// Chaque objet est un article. Les champs "titre", "extrait" et "contenu"
// existent dans les trois langues : { fr: ..., en: ..., it: ... }.
// "rubrique" doit être "livres", "reflexion" ou "aparte".
// "slug" doit être unique et sans espace (utilisé dans l'adresse de la page).

export const articles = [
  {
    slug: "cent-ans-de-solitude",
    rubrique: "livres",
    image: "/couvertures/cent-ans-de-solitude.png",
    date: "2026-07-23",
    titre: {
      fr: "Et bien sûr et avant tout, il y a Cent ans de solitude.",
      en: "And of course, above all, there is One Hundred Years of Solitude.",
      it: "E naturalmente, prima di tutto, c'è Cent'anni di solitudine.",
    },
    extrait: {
      fr: "Bien plus puissant qu'un chef d'œuvre absolu : une vision du monde, une reformulation grandiose du réel.",
      en: "Far more powerful than an absolute masterpiece: a vision of the world, a grandiose reformulation of reality.",
      it: "Ben più potente di un capolavoro assoluto: una visione del mondo, una grandiosa riformulazione del reale.",
    },
    contenu: {
      fr: [
        "Et bien sûr et avant tout, il y a Cent ans de solitude.",
        "Bien plus puissant qu'un chef d'œuvre absolu.",
        "Une vision du monde, une reformulation grandiose du réel, qui brouille les frontières entre le visible et l'invisible, les vivants et les morts, le présent et le passé.",
        "Un récit cataclysmique peuplé de mères et de fils, de mariées et de linceuls, de poignards et de frères, de cirques et de cimetières, de charlatans et de dieux, de revenants et de fuyards, de gitans et de corsaires, d'esprits, de malédictions, de prédictions et de prémonitions, de sortilèges et de sacrilèges, de miracles, de déluges, de fourmis rouges et de goyaves, d'iguanes et de curés.",
        "García Márquez, avec la ferveur de Shéhérazade, nous livre de sa voix bariolée un portrait halluciné et poétique du genre humain et nous donne à voir du même coup les prodigieuses contrées de son imagination déchaînée.",
        "A Macondo, repaire chimérique des Caraïbes et théâtre de l'action, c'est tout l'Occident de Homère, de Boccace, de Rabelais et de Cervantes qui se bouscule, dans un tohu-bohu digne de l'Olympe ou de la Genèse.",
      ],
      en: [
        "And of course, above all, there is One Hundred Years of Solitude.",
        "Far more powerful than an absolute masterpiece.",
        "A vision of the world, a grandiose reformulation of reality, one that blurs the borders between the visible and the invisible, the living and the dead, the present and the past.",
        "A cataclysmic tale peopled with mothers and sons, brides and shrouds, daggers and brothers, circuses and cemeteries, charlatans and gods, ghosts and fugitives, gypsies and corsairs, spirits, curses, predictions and premonitions, spells and sacrileges, miracles, floods, red ants and guavas, iguanas and priests.",
        "García Márquez, with the fervour of Scheherazade, delivers in his motley voice a hallucinated and poetic portrait of humankind, and in the same stroke lets us glimpse the prodigious lands of his unbridled imagination.",
        "In Macondo, that chimerical Caribbean lair and stage of the action, the whole West of Homer, Boccaccio, Rabelais and Cervantes jostles together, in a hubbub worthy of Olympus or of Genesis.",
      ],
      it: [
        "E naturalmente, prima di tutto, c'è Cent'anni di solitudine.",
        "Ben più potente di un capolavoro assoluto.",
        "Una visione del mondo, una grandiosa riformulazione del reale, che confonde i confini tra il visibile e l'invisibile, i vivi e i morti, il presente e il passato.",
        "Un racconto cataclismico popolato di madri e di figli, di spose e di sudari, di pugnali e di fratelli, di circhi e di cimiteri, di ciarlatani e di dèi, di fantasmi e di fuggiaschi, di gitani e di corsari, di spiriti, di maledizioni, di predizioni e di premonizioni, di sortilegi e di sacrilegi, di miracoli, di diluvi, di formiche rosse e di guaiave, di iguane e di preti.",
        "García Márquez, con il fervore di Shahrazàd, ci consegna con la sua voce variopinta un ritratto allucinato e poetico del genere umano e ci fa intravedere al tempo stesso le prodigiose contrade della sua immaginazione scatenata.",
        "A Macondo, tana chimerica dei Caraibi e teatro dell'azione, è tutto l'Occidente di Omero, di Boccaccio, di Rabelais e di Cervantes che si accalca, in un parapiglia degno dell'Olimpo o della Genesi.",
      ],
    },
  },
  {
    slug: "distraction-organisee",
    rubrique: "reflexion",
    date: "2026-06-02",
    titre: {
      fr: "La distraction organisée — sur l'attention à l'école",
      en: "Organised distraction — on attention in school",
      it: "La distrazione organizzata — sull'attenzione a scuola",
    },
    extrait: {
      fr: "Ce que les outils numériques en classe font vraiment à la concentration des élèves, au-delà des discours convenus.",
      en: "What digital tools in the classroom really do to students' concentration, beyond the usual talking points.",
      it: "Ciò che gli strumenti digitali in classe fanno davvero alla concentrazione degli studenti, al di là dei discorsi convenzionali.",
    },
    contenu: {
      fr: [
        "Depuis une dizaine d'années, l'école a multiplié les écrans sans toujours se demander ce qu'elle en attendait précisément. La promesse était celle d'un apprentissage individualisé ; la réalité est souvent celle d'une attention fragmentée.",
        "Plusieurs travaux récents en sciences cognitives suggèrent que la simple présence d'un appareil connecté, même éteint, réduit la capacité de concentration disponible pour une tâche. L'école, en généralisant ces outils, a peut-être sous-estimé ce coût silencieux.",
        "Il ne s'agit pas de revenir à l'ardoise, mais de reposer la question du moment et de la mesure : quand l'outil numérique sert-il vraiment l'apprentissage, et quand devient-il une source de charge cognitive supplémentaire déguisée en modernité ?",
      ],
      en: [
        "For about a decade, schools have multiplied screens without always asking themselves precisely what they expected from them. The promise was one of individualised learning; the reality is often one of fragmented attention.",
        "Several recent studies in cognitive science suggest that the mere presence of a connected device, even switched off, reduces the concentration available for a task. In generalising these tools, schools may have underestimated this silent cost.",
        "This is not about returning to the slate, but about raising anew the question of timing and measure: when does the digital tool truly serve learning, and when does it become a source of extra cognitive load dressed up as modernity?",
      ],
      it: [
        "Da una decina d'anni, la scuola ha moltiplicato gli schermi senza sempre chiedersi cosa si aspettasse esattamente da essi. La promessa era quella di un apprendimento personalizzato; la realtà è spesso quella di un'attenzione frammentata.",
        "Diversi studi recenti di scienze cognitive suggeriscono che la semplice presenza di un dispositivo connesso, anche spento, riduce la capacità di concentrazione disponibile per un compito. La scuola, generalizzando questi strumenti, ha forse sottovalutato questo costo silenzioso.",
        "Non si tratta di tornare alla lavagnetta, ma di riporre la questione del momento e della misura: quando lo strumento digitale serve davvero all'apprendimento, e quando diventa una fonte di ulteriore carico cognitivo travestita da modernità?",
      ],
    },
  },
  {
    slug: "calvino-ecrans",
    rubrique: "livres",
    date: "2026-05-18",
    titre: {
      fr: "Relire Calvino à l'âge des écrans",
      en: "Rereading Calvino in the age of screens",
      it: "Rileggere Calvino nell'età degli schermi",
    },
    extrait: {
      fr: "Les Villes invisibles comme miroir anticipé de nos existences hyperconnectées et fragmentées.",
      en: "Invisible Cities as an early mirror of our hyperconnected, fragmented lives.",
      it: "Le città invisibili come specchio anticipato delle nostre esistenze iperconnesse e frammentate.",
    },
    contenu: {
      fr: [
        "Italo Calvino publiait Les Villes invisibles en 1972, bien avant l'ère numérique. Pourtant, la structure éclatée de l'œuvre — cinquante-cinq villes qui n'en forment peut-être qu'une seule, vue sous des angles différents — résonne étrangement avec notre expérience contemporaine de la navigation entre onglets et fils d'actualité.",
        "Chaque ville de Calvino est une facette : la mémoire, le désir, les signes, les échanges. On pourrait presque y lire une préfiguration de nos identités numériques multiples, chacune vraie et partielle à la fois.",
        "Relire ce texte aujourd'hui, c'est mesurer combien la littérature du XXe siècle avait déjà pressenti nos manières fragmentées d'habiter le monde — bien avant que la technologie ne les rende visibles à tous.",
      ],
      en: [
        "Italo Calvino published Invisible Cities in 1972, long before the digital age. Yet the work's shattered structure — fifty-five cities that may form only a single one, seen from different angles — resonates strangely with our contemporary experience of navigating between tabs and news feeds.",
        "Each of Calvino's cities is a facet: memory, desire, signs, exchanges. One could almost read in them a prefiguration of our multiple digital identities, each at once true and partial.",
        "To reread this text today is to measure how far twentieth-century literature had already sensed our fragmented ways of inhabiting the world — long before technology made them visible to all.",
      ],
      it: [
        "Italo Calvino pubblicava Le città invisibili nel 1972, molto prima dell'era digitale. Eppure la struttura frammentata dell'opera — cinquantacinque città che forse ne compongono una sola, vista da angolazioni diverse — risuona stranamente con la nostra esperienza contemporanea di navigazione tra schede e feed di notizie.",
        "Ogni città di Calvino è una sfaccettatura: la memoria, il desiderio, i segni, gli scambi. Vi si potrebbe quasi leggere una prefigurazione delle nostre molteplici identità digitali, ognuna al tempo stesso vera e parziale.",
        "Rileggere questo testo oggi significa misurare quanto la letteratura del Novecento avesse già presentito i nostri modi frammentati di abitare il mondo — molto prima che la tecnologia li rendesse visibili a tutti.",
      ],
    },
  },
  {
    slug: "humanites-americaines",
    rubrique: "reflexion",
    date: "2026-04-30",
    titre: {
      fr: "Ce que le débat américain sur les humanités dit de nous",
      en: "What the American debate on the humanities says about us",
      it: "Ciò che il dibattito americano sulle discipline umanistiche dice di noi",
    },
    extrait: {
      fr: "La crise des départements de lettres dans les universités américaines a des échos directs en Europe.",
      en: "The crisis of humanities departments in American universities echoes directly in Europe.",
      it: "La crisi dei dipartimenti umanistici nelle università americane ha eco dirette in Europa.",
    },
    contenu: {
      fr: [
        "Aux États-Unis, plusieurs universités ont fermé ou fusionné leurs départements de littérature comparée ces dernières années, invoquant des effectifs en baisse et des impératifs budgétaires. Le débat qui en résulte dépasse largement le cadre académique américain.",
        "Il pose une question simple mais inconfortable : à quoi bon former des lecteurs attentifs et des esprits critiques, dans une économie qui valorise avant tout l'employabilité immédiate ?",
        "En Europe, la question se pose différemment, mais elle se pose. Les arbitrages budgétaires dans l'enseignement supérieur reflètent toujours une hiérarchie implicite des savoirs — et c'est cette hiérarchie qu'il faut interroger, plutôt que de la subir en silence.",
      ],
      en: [
        "In the United States, several universities have closed or merged their comparative literature departments in recent years, citing falling enrolments and budgetary pressures. The resulting debate reaches far beyond the American academic sphere.",
        "It raises a simple but uncomfortable question: what is the point of training attentive readers and critical minds, in an economy that prizes above all immediate employability?",
        "In Europe the question arises differently, but it arises. Budgetary trade-offs in higher education always reflect an implicit hierarchy of knowledge — and it is this hierarchy that must be questioned, rather than endured in silence.",
      ],
      it: [
        "Negli Stati Uniti, diverse università hanno chiuso o accorpato i loro dipartimenti di letteratura comparata negli ultimi anni, invocando iscrizioni in calo e vincoli di bilancio. Il dibattito che ne deriva va ben oltre l'ambito accademico americano.",
        "Pone una domanda semplice ma scomoda: a che serve formare lettori attenti e menti critiche, in un'economia che valorizza soprattutto l'impiegabilità immediata?",
        "In Europa la questione si pone in modo diverso, ma si pone. Gli arbitraggi di bilancio nell'istruzione superiore riflettono sempre una gerarchia implicita dei saperi — ed è questa gerarchia che occorre interrogare, piuttosto che subirla in silenzio.",
      ],
    },
  },
  {
    slug: "festival-litteraire-nantes",
    rubrique: "aparte",
    date: "2026-06-10",
    titre: {
      fr: "Un festival littéraire à ne pas manquer cet automne",
      en: "A literary festival not to miss this autumn",
      it: "Un festival letterario da non perdere quest'autunno",
    },
    extrait: {
      fr: "Trois jours de rencontres, de lectures et de débats — un rendez-vous qui mérite le détour.",
      en: "Three days of encounters, readings and debates — a gathering well worth the trip.",
      it: "Tre giorni di incontri, letture e dibattiti — un appuntamento che merita il viaggio.",
    },
    contenu: {
      fr: [
        "Chaque année, ce rendez-vous rassemble auteurs, traducteurs et lecteurs autour de rencontres qui débordent largement le cadre habituel des salons du livre. On y croise des débats improvisés, des lectures à voix haute jusque tard dans la nuit, et des rencontres qu'on n'attendait pas.",
        "Cette édition met à l'honneur les voix de la littérature traduite, avec une attention particulière portée aux langues rares. Un pari qui pourrait bien devenir la marque de fabrique du festival.",
        "Si vous ne deviez retenir qu'un rendez-vous culturel cet automne, celui-ci a toute sa place sur la liste.",
      ],
      en: [
        "Each year, this gathering brings together authors, translators and readers around encounters that spill well beyond the usual frame of book fairs. There you come across impromptu debates, readings aloud late into the night, and encounters you never expected.",
        "This edition celebrates the voices of translated literature, with particular attention to rare languages. A wager that could well become the festival's hallmark.",
        "If you were to keep just one cultural event this autumn, this one fully deserves its place on the list.",
      ],
      it: [
        "Ogni anno, questo appuntamento riunisce autori, traduttori e lettori attorno a incontri che travalicano ampiamente la cornice abituale delle fiere del libro. Vi si incrociano dibattiti improvvisati, letture ad alta voce fino a tarda notte e incontri inaspettati.",
        "Questa edizione rende omaggio alle voci della letteratura tradotta, con un'attenzione particolare alle lingue rare. Una scommessa che potrebbe diventare il marchio di fabbrica del festival.",
        "Se doveste tenere solo un appuntamento culturale quest'autunno, questo merita tutto il suo posto nella lista.",
      ],
    },
  },
];

// Renvoie la valeur d'un champ traduit dans la langue voulue,
// avec repli sur le français si la traduction manque.
export function champ(valeur, langue) {
  if (valeur && typeof valeur === "object" && !Array.isArray(valeur)) {
    return valeur[langue] || valeur.fr;
  }
  return valeur;
}

export function articlesParRubrique(rubrique) {
  return articles
    .filter((a) => a.rubrique === rubrique)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function tousLesArticles() {
  return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function articleParSlug(slug) {
  return articles.find((a) => a.slug === slug);
}
