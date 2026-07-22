import Link from "next/link";
import { articlesParRubrique } from "../../lib/contenu";
import { rubriques } from "../../lib/rubriques";
import { IconeReflexion } from "../../components/IconesRubriques";

export const metadata = { title: "Remue-méninges — Sous la couverture" };
export const dynamic = "force-dynamic";

export default function Reflexion() {
  const liste = articlesParRubrique("reflexion");

  return (
    <div className="below">
      <h1 className="page-title">{rubriques.reflexion.titre}</h1>
      <p className="page-lede">{rubriques.reflexion.sousTitre}</p>

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
            <span className="art-title">{article.titre}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
