import { Redis } from "@upstash/redis";
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

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function Statistiques() {
  const articles = tousLesArticles();

  let repere = null;
  try {
    repere = await redis.get("stats:reperes");
  } catch (e) {
    repere = null;
  }
  const vuesRepere = (repere && repere.vues) || {};
  const dateRepere = repere && repere.date ? new Date(repere.date) : null;

  const lignes = await Promise.all(
    articles.map(async (article) => {
      const brut = Number(await lireVues(article.slug));
      const avant = vuesRepere[article.slug];
      return {
        titre: champ(article.titre, "fr"),
        rubrique: RUBRIQUES[article.rubrique] || article.rubrique,
        lien: `/${article.rubrique}/${article.slug}`,
        date: article.date,
        vues: BASE + brut,
        ecart: avant === undefined ? null : brut - Number(avant),
      };
    })
  );

  lignes.sort((a, b) => b.vues - a.vues);
  const total = lignes.reduce((somme, l) => somme + l.vues, 0);
  const totalEcart = lignes.reduce((somme, l) => somme + (l.ecart || 0), 0);

  return (
    <div className="below">
      <h1 className="article-title">Statistiques</h1>
      <p className="article-meta">
        {lignes.length} articles · {total.toLocaleString("fr-CH")} vues au total
        {dateRepere
          ? ` · +${totalEcart} depuis le ${dateRepere.toLocaleDateString("fr-CH")} à ${dateRepere.toLocaleTimeString("fr-CH", { hour: "2-digit", minute: "2-digit" })}`
          : " · aucun repère posé pour l'instant"}
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "2rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #C8382E", textAlign: "left" }}>
            <th style={{ padding: "0.6rem 0.4rem" }}>Article</th>
            <th style={{ padding: "0.6rem 0.4rem" }}>Rubrique</th>
            <th style={{ padding: "0.6rem 0.4rem" }}>Date</th>
            <th style={{ padding: "0.6rem 0.4rem", textAlign: "right" }}>Vues</th>
            <th style={{ padding: "0.6rem 0.4rem", textAlign: "right" }}>Depuis</th>
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
              <td
                style={{
                  padding: "0.6rem 0.4rem",
                  textAlign: "right",
                  color: l.ecart ? "#C8382E" : "#8a8070",
                  fontWeight: l.ecart ? 600 : 400,
                }}
              >
                {l.ecart === null ? "—" : l.ecart > 0 ? `+${l.ecart}` : "0"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "2rem" }}>
        <a href="/statistiques965731/valider">Repartir de zéro à partir de maintenant</a>
      </p>
    </div>
  );
}
