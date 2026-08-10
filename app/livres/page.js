import Link from "next/link";
import { articlesParRubrique, champ } from "../../lib/contenu";
import { T } from "../../lib/traductions";
import { getLangue } from "../../lib/langueServeur";
import { IconeLivres } from "../../components/IconesRubriques";

export const dynamic = "force-dynamic";

export default function Rubrique() {
  const langue = getLangue();
  const r = T[langue].rubriques.livres;
  const liste = articlesParRubrique("livres");

  return (
    <div className="below">
      <h1 className="page-title">{r.titre}</h1>
      <p className="page-lede">{r.sousTitre}</p>

      <div className="articles">
        {liste.map((article) => (
          <Link
            key={article.slug}
            href={`/livres/${article.slug}`}
            className="article-row"
          >
            <span className="tag-icon">
              <IconeLivres size={26} />
            </span>
            <span className="art-title">{champ(article.titre, langue)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
