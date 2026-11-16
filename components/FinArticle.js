import Link from "next/link";
import { aLireAussi, champ } from "../lib/contenu";
import { avecItalique } from "../lib/titre";
import { IconeLivres, IconeReflexion, IconeAparte } from "./IconesRubriques";
import Partage from "./Partage";
import Newsletter from "./Newsletter";

const SITE = "https://www.souslacouverture.com";

const ICONES = {
  livres: IconeLivres,
  reflexion: IconeReflexion,
  aparte: IconeAparte,
};

const TITRE_SUITE = {
  fr: "Prolonger la nuit",
  en: "Stay up a little longer",
  it: "Prolungare la notte",
};

// Fin d'article : boutons de partage, deux autres articles à lire,
// puis le formulaire de la newsletter.
export default function FinArticle({ article, langue = "fr" }) {
  const suite = aLireAussi(article, 2);
  const url = `${SITE}/${article.rubrique}/${article.slug}`;

  return (
    <div className="fin-article">
      <Partage url={url} titre={champ(article.titre, langue)} langue={langue} />

      {suite.length > 0 && (
        <>
          <h2 className="fin-titre">{TITRE_SUITE[langue] || TITRE_SUITE.fr}</h2>
          <div className="articles">
            {suite.map((a) => {
              const Icone = ICONES[a.rubrique] || IconeLivres;
              return (
                <Link
                  key={a.slug}
                  href={`/${a.rubrique}/${a.slug}`}
                  className="article-row"
                >
                  <span className="tag-icon">
                    <Icone size={26} />
                  </span>
                  <span className="art-title">
                    {avecItalique(
                      champ(a.titre, langue),
                      champ(a.titreItalique, langue)
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </>
      )}

      <Newsletter langue={langue} />
    </div>
  );
}
