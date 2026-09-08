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
    titreItalique: { fr: "Cent ans de solitude", en: "One Hundred Years of Solitude", it: "Cent'anni di solitudine" },
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
    slug: "dictature-des-ressentis",
    rubrique: "reflexion",
    image: "/couvertures/dictature-des-ressentis.jpg",
    date: "2026-08-15",
    titre: {
      fr: "La dictature des ressentis : quand Eugénie Bastié pulvérise les dogmes du nouvel ordre moral",
      en: "La dictature des ressentis: when Eugénie Bastié shatters the dogmas of the new moral order",
      it: "La dictature des ressentis: quando Eugénie Bastié polverizza i dogmi del nuovo ordine morale",
    },
    titreItalique: {
      fr: "La dictature des ressentis",
      en: "La dictature des ressentis",
      it: "La dictature des ressentis",
    },
    extrait: {
      fr: "Décryptage éclairé et éclairant de la déconstruction de notre rapport au réel sur laquelle prospère le wokisme, et de l'émergence de l'individu et de ses ressentis comme l'exclusive mesure de toute chose.",
      en: "An enlightened and illuminating analysis of the dismantling of our relationship to reality on which wokeism thrives, and of the rise of the individual and their feelings as the sole measure of all things.",
      it: "Una decifrazione lucida e illuminante dello smantellamento del nostro rapporto con il reale su cui prospera il wokismo, e dell'emergere dell'individuo e dei suoi sentimenti come unica misura di ogni cosa.",
    },
    contenu: {
      fr: [
        "Décryptage éclairé et éclairant de la déconstruction de notre rapport au réel sur laquelle prospère le wokisme et de l'émergence, dans notre société, de l'individu et ses ressentis comme l'exclusive mesure de toute chose.",
        "Et l'on voudrait paradoxalement que ce soit sur ce principe clivant, qui est l'un des fondements du relativisme moral, que se construise un monde plus uni…",
        "Loin du resserrement des liens sociaux promis par cette vision du monde, c'est à une pulvérisation en règle de l'idée de collectivité qu'on assiste : le fameux « vivre ensemble », noble mantra s'il en est, partout radieusement proclamé et d'où viendrait notre salut, se résume en fait à une somme d'intérêts individuels éclatés qui tentent de s'imposer souvent à coups d'invectives ou de sermons, parfois les deux ensemble, selon l'urgence du sujet ou le rapport de force.",
        "Tous les adeptes de ce nouvel ordre moral (doctorants en sciences sociales des universités occidentales en tête, comme nous le rappelle Eugénie Bastié) n'ont qu'à bien se tenir : la résistance face à l'effondrement de la rationalité moderne héritée des Lumières s'organise avec méthode et détermination.",
        "Les chroniques publiées dans Le Figaro et rassemblées dans cet ouvrage en témoignent. Dans ce naufrage de la pensée qui signe notre postmodernité, elles apparaissent comme autant de petites bouées salutaires.",
        "Pour tenter de concilier — éternel combat — liberté individuelle et intérêts collectifs, c'est la raison qu'il faut appeler à la rescousse, et non la vertu.",
        "La raison est toujours vecteur d'unité. La vertu, jamais.",
      ],
      en: [
        "An enlightened and illuminating analysis of the dismantling of our relationship to reality on which wokeism thrives, and of the rise, in our society, of the individual and their feelings as the sole measure of all things.",
        "And we would paradoxically want a more united world to be built upon this divisive principle — one of the very foundations of moral relativism…",
        "Far from the tightening of social bonds this worldview promises, what we are witnessing is a wholesale pulverisation of the very idea of the collective: the famous “living together”, a noble mantra if ever there was one, radiantly proclaimed everywhere as the source of our salvation, in fact boils down to a sum of fragmented individual interests that try to impose themselves, often through invective or sermons, sometimes both at once, depending on the urgency of the topic or the balance of power.",
        "All the adherents of this new moral order (social-science doctoral students at Western universities foremost among them, as Eugénie Bastié reminds us) had better watch out: the resistance to the collapse of the modern rationality inherited from the Enlightenment is organising itself with method and determination.",
        "The columns published in Le Figaro and gathered in this book bear witness to it. Amid this shipwreck of thought that marks our postmodernity, they appear as so many small, saving lifebuoys.",
        "To reconcile — that eternal struggle — individual freedom and collective interests, it is reason we must call to the rescue, not virtue.",
        "Reason is always a vector of unity. Virtue, never.",
      ],
      it: [
        "Una decifrazione lucida e illuminante dello smantellamento del nostro rapporto con il reale su cui prospera il wokismo, e dell'emergere, nella nostra società, dell'individuo e dei suoi sentimenti come unica misura di ogni cosa.",
        "E si vorrebbe, paradossalmente, che sia proprio su questo principio divisivo — uno dei fondamenti del relativismo morale — che si costruisca un mondo più unito…",
        "Lontano dal rafforzamento dei legami sociali promesso da questa visione del mondo, ciò a cui si assiste è una vera e propria polverizzazione dell'idea stessa di collettività: il famoso « vivere insieme », nobile mantra se mai ce n'è uno, ovunque proclamato con entusiasmo e da cui verrebbe la nostra salvezza, si riduce in realtà a una somma di interessi individuali frammentati che cercano di imporsi, spesso a colpi di invettive o di prediche, a volte entrambe insieme, a seconda dell'urgenza del tema o dei rapporti di forza.",
        "Tutti gli adepti di questo nuovo ordine morale (i dottorandi in scienze sociali delle università occidentali in testa, come ci ricorda Eugénie Bastié) non hanno che da tenersi pronti: la resistenza di fronte al crollo della razionalità moderna ereditata dall'Illuminismo si organizza con metodo e determinazione.",
        "Le cronache pubblicate su Le Figaro e raccolte in questo volume ne sono la testimonianza. In questo naufragio del pensiero che segna la nostra postmodernità, esse appaiono come tante piccole boe di salvataggio.",
        "Per tentare di conciliare — eterna lotta — libertà individuale e interessi collettivi, è la ragione che bisogna chiamare in soccorso, non la virtù.",
        "La ragione è sempre veicolo di unità. La virtù, mai.",
      ],
    },
  },
  {
    slug: "churchill-the-painter",
    rubrique: "aparte",
    image: "/couvertures/churchill-1.jpg",
    image2: "/couvertures/churchill-2.jpg",
    date: "2026-08-19",
    titre: {
      fr: "Churchill : et en plus il peint",
      en: "Churchill: and what's more, he paints",
      it: "Churchill: e per di più, dipinge",
    },
    extrait: {
      fr: "Inattendu et, pour tout dire, assez éblouissant.",
      en: "Unexpected and, to be honest, quite dazzling.",
      it: "Inaspettato e, a dirla tutta, piuttosto abbagliante.",
    },
    contenu: {
      fr: [
        "« Happy are the painters, for they shall not be lonely. Light and colour, peace and hope, will keep them company to the end… or almost to the end of the day. » — Winston Churchill",
        "Inattendu et, pour tout dire, assez éblouissant.",
        "[The Wallace Collection — Winston Churchill : The Painter](https://www.wallacecollection.org/whats-on/exhibitions-displays/winston-churchill-the-painter/)",
        "À voir jusqu'au 29 novembre à Londres, dans le magnifique écrin qu'est Hertford House, au cœur de Marylebone.",
      ],
      en: [
        "« Happy are the painters, for they shall not be lonely. Light and colour, peace and hope, will keep them company to the end… or almost to the end of the day. » — Winston Churchill",
        "Unexpected and, to be honest, quite dazzling.",
        "[The Wallace Collection — Winston Churchill : The Painter](https://www.wallacecollection.org/whats-on/exhibitions-displays/winston-churchill-the-painter/)",
        "On view until 29 November in London, in the magnificent setting of Hertford House, in the heart of Marylebone.",
      ],
      it: [
        "« Happy are the painters, for they shall not be lonely. Light and colour, peace and hope, will keep them company to the end… or almost to the end of the day. » — Winston Churchill",
        "Inaspettato e, a dirla tutta, piuttosto abbagliante.",
        "[The Wallace Collection — Winston Churchill : The Painter](https://www.wallacecollection.org/whats-on/exhibitions-displays/winston-churchill-the-painter/)",
        "Da vedere fino al 29 novembre a Londra, nel magnifico scrigno che è Hertford House, nel cuore di Marylebone.",
      ],
    },
  },
  {
    slug: "nabokov-un-nom-qui-pique",
    rubrique: "reflexion",
    image: "/couvertures/nabokov-litteratures.jpg",
    date: "2026-09-08",
    titre: {
      fr: "Nabokov, un nom qui pique...",
      en: "Nabokov, a name with a sting...",
      it: "Nabokov, un nome che pizzica...",
    },
    extrait: {
      fr: "Mais il n'y a pas que Lolita dans sa vie... C'est toute la littérature européenne et russe qu'il a étreinte.",
      en: "There is more to his life than Lolita... It is the whole of European and Russian literature that he embraced.",
      it: "Ma non c'è solo Lolita nella sua vita... È tutta la letteratura europea e russa che ha abbracciato.",
    },
    contenu: {
      fr: [
        "Nabokov : un nom qui pique. Mais il n'y a pas que Lolita dans sa vie...",
        "C'est toute la littérature européenne et russe qu'il a étreinte et que l'on retrouve commentée ici, dans des conférences iconoclastes et réjouissantes prononcées un peu partout en Amérique entre 1941 et 1958.",
        "Mention spéciale pour sa lecture hétérodoxe du Don Quichotte :",
        "« Les deux parties de Don Quichotte constituent une véritable encyclopédie de la cruauté. C'est l'un des livres les plus durs et les plus barbares qu'on ait jamais écrits. Et sa cruauté est artistique. (…). D'abord, je vais passer en revue quelques joyeux échantillons de cruauté physique dans la première partie du livre. (…) Je vais (donc) me contenter d'éclairer de ma petite lampe de poche un coin de la salle de torture. Ensuite, j'étudierai les cruautés mentales de la seconde partie. »",
        "Vladimir Nabokov, Littératures, Bouquins / Robert Laffont.",
      ],
      en: [
        "Nabokov: a name with a sting. But there is more to his life than Lolita...",
        "It is the whole of European and Russian literature that he embraced, and that we find discussed here, in iconoclastic and exhilarating lectures given all over America between 1941 and 1958.",
        "Special mention for his heterodox reading of Don Quixote:",
        "« The two parts of Don Quixote form a veritable encyclopedia of cruelty. It is one of the harshest and most barbarous books ever written. And its cruelty is artistic. (…). First, I shall review a few merry samples of physical cruelty in the first part of the book. (…) I shall therefore content myself with shining my little pocket torch into one corner of the torture chamber. Then I shall examine the mental cruelties of the second part. »",
        "Vladimir Nabokov, Littératures, Bouquins / Robert Laffont.",
      ],
      it: [
        "Nabokov: un nome che pizzica. Ma non c'è solo Lolita nella sua vita...",
        "È tutta la letteratura europea e russa che ha abbracciato, e che ritroviamo qui commentata, in conferenze iconoclaste e godibilissime tenute un po' ovunque in America tra il 1941 e il 1958.",
        "Menzione speciale per la sua lettura eterodossa del Don Chisciotte:",
        "« Le due parti del Don Chisciotte costituiscono una vera enciclopedia della crudeltà. È uno dei libri più duri e più barbari che siano mai stati scritti. E la sua crudeltà è artistica. (…). Anzitutto, passerò in rassegna qualche allegro campione di crudeltà fisica nella prima parte del libro. (…) Mi limiterò dunque a illuminare con la mia piccola torcia un angolo della sala di tortura. Poi studierò le crudeltà mentali della seconda parte. »",
        "Vladimir Nabokov, Littératures, Bouquins / Robert Laffont.",
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
