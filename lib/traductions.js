// Dictionnaire des textes fixes du site, dans les trois langues.
// (Le contenu des articles est traduit dans lib/contenu.js.)

export const langues = ["fr", "en", "it"];
export const langueParDefaut = "fr";

export const T = {
  fr: {
    masthead: ["Sous la", "couverture"],
    nomSite: "Sous la couverture",
    sousTitreCouverture: "on ne promet pas d'être sage",
    poeme: [
      "— Nuits blanches à caresser des pages du regard —",
      "À l'aube, petites chroniques ébouriffées",
      "de ces rencontres d'un soir",
    ],
    rubriques: {
      livres: { titre: "Effeuillages", sousTitre: "La littérature mise à nu" },
      reflexion: {
        titre: "Effronteries",
        sousTitre: "Des idées qui caressent le poil ou qui le hérissent",
      },
      aparte: { titre: "Extases", sousTitre: "Papillonner d'un art à l'autre" },
    },
    newsletter: {
      titre: "Plus si affinités",
      sousTitre: "Le billet doux de la rédactrice",
      bouton: "S'inscrire",
      placeholder: "votre@email.fr",
    },
    contact: "Liaisons dangereuses",
    signaturePied: "Depuis 2026",
    retour: "← Retour aux",
    lecture: ["lecture", "lectures"],
    dateLocale: "fr-FR",
  },
  en: {
    masthead: ["Under the", "cover"],
    nomSite: "Under the cover",
    sousTitreCouverture: "no promises to behave",
    poeme: [
      "— Sleepless nights, eyes caressing pages —",
      "At dawn, little tousled chronicles",
      "of these one-night encounters",
    ],
    rubriques: {
      livres: { titre: "Tease", sousTitre: "Literature laid bare" },
      reflexion: { titre: "Cheek", sousTitre: "Ideas that stroke or ruffle" },
      aparte: { titre: "Bliss", sousTitre: "Flitting from one art to another" },
    },
    newsletter: {
      titre: "…and more if we click",
      sousTitre: "The editor's tender note",
      bouton: "Subscribe",
      placeholder: "your@email.com",
    },
    contact: "Dangerous Liaisons",
    signaturePied: "Since 2026",
    retour: "← Back to",
    lecture: ["read", "reads"],
    dateLocale: "en-GB",
  },
  it: {
    masthead: ["Sotto la", "copertina"],
    nomSite: "Sotto la copertina",
    sousTitreCouverture: "Non si promette di fare i bravi",
    poeme: [
      "— Notti in bianco ad accarezzare pagine con lo sguardo —",
      "All'alba, piccole cronache scarmigliate",
      "di questi incontri di una sera",
    ],
    rubriques: {
      livres: { titre: "Sfogliature", sousTitre: "La letteratura messa a nudo" },
      reflexion: {
        titre: "Sfrontatezze",
        sousTitre: "Idee che accarezzano il pelo o che lo fanno rizzare",
      },
      aparte: {
        titre: "Solluccheri",
        sousTitre: "Svolazzare da un'arte all'altra",
      },
    },
    newsletter: {
      titre: "…e chissà",
      sousTitre: "Il biglietto galante della redattrice",
      bouton: "Iscriviti",
      placeholder: "tua@email.it",
    },
    contact: "Relazioni pericolose",
    signaturePied: "Dal 2026",
    retour: "← Torna a",
    lecture: ["lettura", "letture"],
    dateLocale: "it-IT",
  },
};
