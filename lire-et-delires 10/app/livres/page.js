import Link from "next/link";
import { articlesParRubrique } from "../../lib/contenu";
import { rubriques } from "../../lib/rubriques";
import { IconeLivres } from "../../components/IconesRubriques";

export const metadata = { title: "Liaisons dangereuses — Sous la couverture" };
export const dynamic = "force-dynamic";

export default function Livres() {
  const liste = articlesParRubrique("livres");

  return (
    <div className="below">
      <h1 className="page-title">{rubriques.livres.titre}</h1>
      <p className="page-lede">{rubriques.livres.sousTitre}</p>

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
            <span className="art-title">{article.titre}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
