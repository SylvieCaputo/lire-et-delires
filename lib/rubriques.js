// Informations des trois rubriques du site. Centralisées ici pour être
// réutilisées dans la navigation, la page d'accueil et les pages de listing.
// Note : les clés (livres, reflexion, aparte) et les href restent inchangés
// pour ne pas casser les adresses des pages ; seuls les titres affichés changent.

export const rubriques = {
  livres: {
    titre: "Effeuillages",
    sousTitre: "La littérature mise à nu",
    href: "/livres",
  },
  reflexion: {
    titre: "Effronteries",
    sousTitre: "Des idées qui caressent le poil ou qui le hérissent",
    href: "/reflexion",
  },
  aparte: {
    titre: "Extases",
    sousTitre: "Papillonner d'un art à l'autre",
    href: "/aparte",
  },
};
