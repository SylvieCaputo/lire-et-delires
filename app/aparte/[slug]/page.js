import Link from "next/link";
import { notFound } from "next/navigation";
import { articleParSlug } from "../../../lib/contenu";
import { lireVues } from "../../../lib/vues";
import CompteurVues from "../../../components/CompteurVues";

export const dynamic = "force-dynamic";

export default async function ArticleAparte({ params }) {
  const article = articleParSlug(params.slug);
  if (!article || article.rubrique !== "aparte") notFound();

  const vues = await lireVues(article.slug);

  return (
    <div className="below">
      <span className="article-tag">{article.tag}</span>
      <h1 className="article-title">{article.titre}</h1>
      <p className="article-meta">
        {new Date(article.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · <CompteurVues slug={article.slug} initial={vues} />
      </p>

      <div className="article-body">
        {article.contenu.map((paragraphe, i) => (
          <p key={i}>{paragraphe}</p>
        ))}
      </div>

      <Link href="/aparte" className="back-link">
        ← Retour à En aparté
      </Link>
    </div>
  );
}
