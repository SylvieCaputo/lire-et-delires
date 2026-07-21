import Link from "next/link";
import { articlesParRubrique } from "../../lib/contenu";

export const metadata = { title: "Présentations d'ouvrages — Lire et délires" };

export default function Livres() {
  const liste = articlesParRubrique("livres");

  return (
    <div className="below">
      <h1 className="page-title">Présentations d&apos;ouvrages</h1>
      <p className="page-lede">Littérature et essais, en courtes fiches de lecture.</p>

      <div className="articles">
        {liste.map((article) => (
          <Link
            key={article.slug}
            href={`/livres/${article.slug}`}
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
