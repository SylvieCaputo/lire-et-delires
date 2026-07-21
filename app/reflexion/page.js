import Link from "next/link";
import { articlesParRubrique } from "../../lib/contenu";

export const metadata = { title: "Articles de réflexion — Lire et délire" };

export default function Reflexion() {
  const liste = articlesParRubrique("reflexion");

  return (
    <div className="below">
      <h1 className="page-title">Articles de réflexion</h1>
      <p className="page-lede">
        Pédagogie et actualité intellectuelle, Europe et États-Unis.
      </p>

      <div className="articles">
        {liste.map((article) => (
          <Link
            key={article.slug}
            href={`/reflexion/${article.slug}`}
            className="article-row"
          >
            <span className="tag">{article.tag}</span>
            <span className="art-title">{article.titre}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
