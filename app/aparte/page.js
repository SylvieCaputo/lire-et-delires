import Link from "next/link";
import { articlesParRubrique } from "../../lib/contenu";
import { rubriques } from "../../lib/rubriques";
import { IconeAparte } from "../../components/IconesRubriques";

export const metadata = { title: "En aparté — Sous la couverture" };
export const dynamic = "force-dynamic";

export default function Aparte() {
  const liste = articlesParRubrique("aparte");

  return (
    <div className="below">
      <h1 className="page-title">{rubriques.aparte.titre}</h1>
      <p className="page-lede">{rubriques.aparte.sousTitre}</p>

      <div className="articles">
        {liste.map((article) => (
          <Link
            key={article.slug}
            href={`/aparte/${article.slug}`}
            className="article-row"
          >
            <span className="tag-icon">
              <IconeAparte size={26} />
            </span>
            <span className="art-title">{article.titre}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
