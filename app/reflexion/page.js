import Link from "next/link";
import { articlesParRubrique, champ } from "../../lib/contenu";
import { avecItalique } from "../../lib/titre";
import { T } from "../../lib/traductions";
import { getLangue } from "../../lib/langueServeur";
import { IconeReflexion } from "../../components/IconesRubriques";

export const dynamic = "force-dynamic";

export default function Rubrique() {
  const langue = getLangue();
  const r = T[langue].rubriques.reflexion;
  const liste = articlesParRubrique("reflexion");

  return (
    <div className="below">
      <h1 className="page-title">{r.titre}</h1>
      <p className="page-lede">{r.sousTitre}</p>

      <div className="articles">
        {liste.map((article) => (
          <Link
            key={article.slug}
            href={`/reflexion/${article.slug}`}
            className="article-row"
          >
            <span className="tag-icon">
              <IconeReflexion size={26} />
            </span>
            <span className="art-title">{avecItalique(champ(article.titre, langue), champ(article.titreItalique, langue))}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
