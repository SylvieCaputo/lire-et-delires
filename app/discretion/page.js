import { getLangue } from "../../lib/langueServeur";

export const dynamic = "force-dynamic";

const EMAIL = "souslacouverture@yahoo.com";

// Morceaux de texte : une chaîne simple, { em: "…" } pour l'italique,
// ou { mail: true } pour l'adresse e-mail cliquable.
const MAIL = { mail: true };

const TEXTES = {
  fr: {
    titre: "Discrétion assurée",
    sousTitre: "Mentions légales et confidentialité",
    sections: [
      {
        intertitre: "L'éditrice",
        texte: [
          "« ",
          { em: "Sous la couverture" },
          " » est une revue littéraire en ligne, personnelle et non commerciale, éditée par Sylvie Caputo, à Lausanne (Suisse). Pour toute question : ",
          MAIL,
        ],
      },
      {
        intertitre: "Ce que nous savons de vous",
        texte: [
          "Ce site respecte la loi suisse sur la protection des données. Il conserve uniquement l'adresse e-mail des abonnés à la newsletter « Plus si affinités ». Celle-ci est envoyée via un service spécialisé qui mesure les ouvertures et les clics. L'hébergeur du site enregistre des données techniques de connexion, et un cookie retient la langue choisie. Ces prestataires sont situés aux États-Unis. Vos données ne sont jamais vendues ni cédées. Vous pouvez vous désinscrire en un clic au bas de chaque envoi. Pour consulter, corriger ou effacer vos données, écrivez à ",
          MAIL,
          ".",
        ],
      },
      {
        intertitre: "Droits d'auteur",
        texte: [
          "Les textes publiés ici appartiennent à Sylvie Caputo. Une courte citation accompagnée d'un lien vers le site est la bienvenue ; toute reprise plus large nécessite son accord. Les couvertures et reproductions d'œuvres illustrent les articles et restent la propriété de leurs auteurs et éditeurs ; elles seront retirées sur simple demande.",
        ],
      },
    ],
    miseAJour: "Dernière mise à jour : novembre 2026",
  },
  en: {
    titre: "Discretion assured",
    sousTitre: "Legal notice & privacy",
    sections: [
      {
        intertitre: "The editor",
        texte: [
          "“",
          { em: "Under the cover" },
          "” is a personal, non-commercial online literary review, edited by Sylvie Caputo in Lausanne, Switzerland. For any questions: ",
          MAIL,
        ],
      },
      {
        intertitre: "What we know about you",
        texte: [
          "This site complies with Swiss data protection law. It stores only the email addresses of subscribers to the newsletter “…and more if we click”, which is sent through a specialised service that measures opens and clicks. The site's host records technical connection data, and a cookie remembers your chosen language. These providers are based in the United States. Your data is never sold or passed on. You can unsubscribe with one click at the bottom of every email. To view, correct or delete your data, write to ",
          MAIL,
          ".",
        ],
      },
      {
        intertitre: "Copyright",
        texte: [
          "The texts published here belong to Sylvie Caputo. A short quotation with a link to the site is welcome; any wider reuse requires her permission. Book covers and reproductions of works illustrate the articles and remain the property of their authors and publishers; they will be removed on request.",
        ],
      },
    ],
    miseAJour: "Last updated: November 2026",
  },
  it: {
    titre: "Discrezione garantita",
    sousTitre: "Note legali e privacy",
    sections: [
      {
        intertitre: "L'editrice",
        texte: [
          "« ",
          { em: "Sotto la copertina" },
          " » è una rivista letteraria online, personale e senza scopo commerciale, curata da Sylvie Caputo a Losanna (Svizzera). Per qualsiasi domanda: ",
          MAIL,
        ],
      },
      {
        intertitre: "Ciò che sappiamo di voi",
        texte: [
          "Questo sito rispetta la legge svizzera sulla protezione dei dati. Conserva unicamente l'indirizzo e-mail degli iscritti alla newsletter «…e chissà», inviata tramite un servizio specializzato che misura aperture e clic. Il fornitore che ospita il sito registra dati tecnici di connessione, e un cookie memorizza la lingua scelta. Questi fornitori hanno sede negli Stati Uniti. I vostri dati non vengono mai venduti né ceduti. Potete disiscrivervi con un clic in fondo a ogni invio. Per consultare, correggere o cancellare i vostri dati, scrivete a ",
          MAIL,
          ".",
        ],
      },
      {
        intertitre: "Diritti d'autore",
        texte: [
          "I testi pubblicati qui appartengono a Sylvie Caputo. Una breve citazione accompagnata da un link al sito è benvenuta; qualsiasi riproduzione più ampia richiede il suo consenso. Le copertine e le riproduzioni di opere illustrano gli articoli e restano di proprietà dei rispettivi autori ed editori; saranno rimosse su semplice richiesta.",
        ],
      },
    ],
    miseAJour: "Ultimo aggiornamento: novembre 2026",
  },
};

function morceau(m, i) {
  if (typeof m === "string") return m;
  if (m.em) return <em key={i}>{m.em}</em>;
  if (m.mail) {
    return (
      <a key={i} href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
    );
  }
  return null;
}

export function generateMetadata() {
  const c = TEXTES[getLangue()] || TEXTES.fr;
  return { title: `${c.titre} — Sous la couverture` };
}

export default function Discretion() {
  const c = TEXTES[getLangue()] || TEXTES.fr;

  return (
    <div className="below">
      <h1 className="article-title">{c.titre}</h1>
      <p className="article-meta">{c.sousTitre}</p>

      <div className="article-body">
        {c.sections.map((s) => (
          <div key={s.intertitre}>
            <p>
              <strong>{s.intertitre}</strong>
            </p>
            <p>{s.texte.map(morceau)}</p>
          </div>
        ))}
      </div>

      <p className="signature-article">{c.miseAJour}</p>
    </div>
  );
}
