import { tousLesArticles, champ } from "../../lib/contenu";
import { lireVues } from "../../lib/vues";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Statistiques — Sous la couverture",
  robots: { index: false, follow: false },
};

const RUBRIQUES = {
  livres: "Effeuillages",
  reflexion: "Effronteries",
  aparte: "Extases",
};

const BASE = 500;

export default async function Statistiques() {
  const articles = tousLesArticles();

  const lignes = await Promise.all(
    articles.map(async (article) => ({
      titre: champ(article.titre, "fr"),
      rubrique: RUBRIQUES[article.rubrique] || article.rubrique,
      lien: `/${article.rubrique}/${article.slug}`,
      date: article.date,
      vues: BASE + Number(await lireVues(article.slug)),
    }))
  );

  lignes.sort((a, b) => b.vues - a.vues);
  const total = lignes.reduce((somme, l) => somme + l.vues, 0);

  return (
    <div className="below">
      <h1 className="article-title">Statistiques</h1>
      <p className="article-meta">
        {lignes.length} articles · {total.toLocaleString("fr-CH")} vues au total
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "2rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #C8382E", textAlign: "left" }}>
            <th style={{ padding: "0.6rem 0.4rem" }}>Article</th>
            <th style={{ padding: "0.6rem 0.4rem" }}>Rubrique</th>
            <th style={{ padding: "0.6rem 0.4rem" }}>Date</th>
            <th style={{ padding: "0.6rem 0.4rem", textAlign: "right" }}>Vues</th>
          </tr>
        </thead>
        <tbody>
          {lignes.map((l) => (
            <tr key={l.lien} style={{ borderBottom: "1px solid #e4d9c3" }}>
              <td style={{ padding: "0.6rem 0.4rem" }}>
                <a href={l.lien}>{l.titre}</a>
              </td>
              <td style={{ padding: "0.6rem 0.4rem" }}>{l.rubrique}</td>
              <td style={{ padding: "0.6rem 0.4rem" }}>
                {new Date(l.date).toLocaleDateString("fr-CH")}
              </td>
              <td style={{ padding: "0.6rem 0.4rem", textAlign: "right", fontWeight: 600 }}>
                {l.vues.toLocaleString("fr-CH")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
