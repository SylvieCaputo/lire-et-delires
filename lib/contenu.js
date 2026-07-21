// Chaque objet est un article. Pour en ajouter un nouveau, copie un bloc
// et modifie les champs. "rubrique" doit être "livres" ou "reflexion".
// "slug" doit être unique et sans espace (utilisé dans l'adresse de la page).

export const articles = [
  {
    slug: "distraction-organisee",
    rubrique: "reflexion",
    tag: "Essai",
    titre: "La distraction organisée — sur l'attention à l'école",
    extrait:
      "Ce que les outils numériques en classe font vraiment à la concentration des élèves, au-delà des discours convenus.",
    date: "2026-06-02",
    contenu: [
      "Depuis une dizaine d'années, l'école a multiplié les écrans sans toujours se demander ce qu'elle en attendait précisément. La promesse était celle d'un apprentissage individualisé ; la réalité est souvent celle d'une attention fragmentée.",
      "Plusieurs travaux récents en sciences cognitives suggèrent que la simple présence d'un appareil connecté, même éteint, réduit la capacité de concentration disponible pour une tâche. L'école, en généralisant ces outils, a peut-être sous-estimé ce coût silencieux.",
      "Il ne s'agit pas de revenir à l'ardoise, mais de reposer la question du moment et de la mesure : quand l'outil numérique sert-il vraiment l'apprentissage, et quand devient-il une source de charge cognitive supplémentaire déguisée en modernité ?"
    ]
  },
  {
    slug: "calvino-ecrans",
    rubrique: "livres",
    tag: "Littérature",
    titre: "Relire Calvino à l'âge des écrans",
    extrait:
      "Les Villes invisibles comme miroir anticipé de nos existences hyperconnectées et fragmentées.",
    date: "2026-05-18",
    contenu: [
      "Italo Calvino publiait Les Villes invisibles en 1972, bien avant l'ère numérique. Pourtant, la structure éclatée de l'œuvre — cinquante-cinq villes qui n'en forment peut-être qu'une seule, vue sous des angles différents — résonne étrangement avec notre expérience contemporaine de la navigation entre onglets et fils d'actualité.",
      "Chaque ville de Calvino est une facette : la mémoire, le désir, les signes, les échanges. On pourrait presque y lire une préfiguration de nos identités numériques multiples, chacune vraie et partielle à la fois.",
      "Relire ce texte aujourd'hui, c'est mesurer combien la littérature du XXe siècle avait déjà pressenti nos manières fragmentées d'habiter le monde — bien avant que la technologie ne les rende visibles à tous."
    ]
  },
  {
    slug: "humanites-americaines",
    rubrique: "reflexion",
    tag: "Actualité",
    titre: "Ce que le débat américain sur les humanités dit de nous",
    extrait:
      "La crise des départements de lettres dans les universités américaines a des échos directs en Europe.",
    date: "2026-04-30",
    contenu: [
      "Aux États-Unis, plusieurs universités ont fermé ou fusionné leurs départements de littérature comparée ces dernières années, invoquant des effectifs en baisse et des impératifs budgétaires. Le débat qui en résulte dépasse largement le cadre académique américain.",
      "Il pose une question simple mais inconfortable : à quoi sert-on de former des lecteurs attentifs et des esprits critiques, dans une économie qui valorise avant tout l'employabilité immédiate ?",
      "En Europe, la question se pose différemment, mais elle se pose. Les arbitrages budgétaires dans l'enseignement supérieur reflètent toujours une hiérarchie implicite des savoirs — et c'est cette hiérarchie qu'il faut interroger, plutôt que de la subir en silence."
    ]
  }
];

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
