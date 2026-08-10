import Link from "next/link";
import { notFound } from "next/navigation";
import { articleParSlug, champ } from "../../../lib/contenu";
import { lireVues } from "../../../lib/vues";
import { T } from "../../../lib/traductions";
import { getLangue } from "../../../lib/langueServeur";
import CompteurVues from "../../../components/CompteurVues";
import SignatureArticle from "../../../components/SignatureArticle";

export const dynamic = "force-dynamic";

export default async function Article({ params }) {
  const article = articleParSlug(params.slug);
  if (!article || article.rubrique !== "aparte") notFound();

  const langue = getLangue();
  const tr = T[langue];
  const titre = champ(article.titre, langue);
  const vues = await lireVues(article.slug);

  return (
    <div className="below">
      <span className="article-tag">{tr.rubriques.aparte.titre}</span>
      <h1 className="article-title">{titre}</h1>
      <p className="article-meta">
        {new Date(article.date).toLocaleDateString(tr.dateLocale, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · <CompteurVues slug={article.slug} initial={vues} langue={langue} />
      </p>

      {article.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={article.image} alt={titre} className="article-image" />
      )}

      <div className="article-body">
        {champ(article.contenu, langue).map((paragraphe, i) => (
          <p key={i}>{paragraphe}</p>
        ))}
      </div>

      <SignatureArticle langue={langue} />

      <Link href="/aparte" className="back-link">
        {tr.retour} {tr.rubriques.aparte.titre}
      </Link>
    </div>
  );
}
