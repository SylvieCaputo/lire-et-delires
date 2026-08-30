import { tousLesArticles } from "../lib/contenu";

const BASE = "https://souslacouverture.com";

// Plan du site : accueil, pages de rubriques, et chaque article.
// (La langue étant gérée par cookie, chaque page n'a qu'une seule URL.)
export default function sitemap() {
  const maintenant = new Date();

  const pagesFixes = [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/livres`, priority: 0.8 },
    { url: `${BASE}/reflexion`, priority: 0.8 },
    { url: `${BASE}/aparte`, priority: 0.8 },
  ].map((p) => ({ ...p, lastModified: maintenant, changeFrequency: "weekly" }));

  const pagesArticles = tousLesArticles().map((a) => ({
    url: `${BASE}/${a.rubrique}/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : maintenant,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pagesFixes, ...pagesArticles];
}
