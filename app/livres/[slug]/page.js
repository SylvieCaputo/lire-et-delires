import Link from "next/link";
import { notFound } from "next/navigation";
import { articleParSlug } from "../../../lib/contenu";
import { incrementerVues } from "../../../lib/vues";

export const dynamic = "force-dynamic";

export default async function ArticleLivre({ params }) {
  const article = articleParSlug(params.slug);
  if (!article || article.rubrique !== "livres") notFound();

  const vues = await incrementerVues(article.slug);

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
        · {vues} lecture{vues > 1 ? "s" : ""}
      </p>

      <div className="article-body">
        {article.contenu.map((paragraphe, i) => (
          <p key={i}>{paragraphe}</p>
        ))}
      </div>

      <Link href="/livres" className="back-link">
        ← Retour aux présentations d&apos;ouvrages
      </Link>
    </div>
  );
}
