import { tousLesArticles, champ } from "../../lib/contenu";

// Flux RSS du site, en français (langue de la newsletter).
// Buttondown lira ce flux pour envoyer un e-mail à chaque nouvelle publication
// et pour composer le récapitulatif mensuel.
export const dynamic = "force-static";

const SITE = "https://sous-la-couverture.vercel.app";

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function GET() {
  const articles = tousLesArticles();

  const items = articles
    .map((a) => {
      const titre = champ(a.titre, "fr");
      const lien = `${SITE}/${a.rubrique}/${a.slug}`;
      const html = champ(a.contenu, "fr")
        .map((p) => `<p>${esc(p)}</p>`)
        .join("\n");
      const resume = esc(champ(a.extrait, "fr"));
      const date = new Date(a.date).toUTCString();
      return `    <item>
      <title>${esc(titre)}</title>
      <link>${lien}</link>
      <guid isPermaLink="true">${lien}</guid>
      <pubDate>${date}</pubDate>
      <description>${resume}</description>
      <content:encoded><![CDATA[${html}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Sous la couverture</title>
    <link>${SITE}</link>
    <description>Presentations d'ouvrages, essais et articles de reflexion.</description>
    <language>fr</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
