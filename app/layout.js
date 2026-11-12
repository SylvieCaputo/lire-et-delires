import "./globals.css";
import Link from "next/link";
import { T } from "../lib/traductions";
import { getLangue } from "../lib/langueServeur";
import LangSwitcher from "../components/LangSwitcher";
import { Bodoni_Moda, Archivo_Narrow, PT_Serif } from "next/font/google";

// Polices hébergées par le site lui-même (next/font) : aucun appel
// aux serveurs de Google depuis le navigateur des visiteurs.
const bodoni = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-bodoni",
});
const archivo = Archivo_Narrow({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-archivo",
});
const ptSerif = PT_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ptserif",
});

// Libellé du lien vers la page légale, dans le pied de page.
const DISCRETION = {
  fr: "Discrétion assurée",
  en: "Discretion assured",
  it: "Discrezione garantita",
};

// Bouton LinkedIn du pied de page (simple lien, aucun script LinkedIn).
const LINKEDIN = {
  fr: { libelle: "Prolongeons l'aventure sur LinkedIn", aria: "Sous la couverture sur LinkedIn" },
  en: { libelle: "Let's continue the adventure on LinkedIn", aria: "Under the cover on LinkedIn" },
  it: { libelle: "Continuiamo l'avventura su LinkedIn", aria: "Sotto la copertina su LinkedIn" },
};

const DESCRIPTION =
  "Revue littéraire trilingue : présentations d'ouvrages, réflexions et coups de cœur, en français, anglais et italien.";

export const metadata = {
  metadataBase: new URL("https://www.souslacouverture.com"),
  title: "Sous la couverture",
  description: DESCRIPTION,
  openGraph: {
    title: "Sous la couverture",
    description: DESCRIPTION,
    siteName: "Sous la couverture",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const langue = getLangue();
  const tr = T[langue];
  const li = LINKEDIN[langue] || LINKEDIN.fr;

  return (
    <html
      lang={langue}
      className={`${bodoni.variable} ${archivo.variable} ${ptSerif.variable}`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sous la couverture"
          href="/rss.xml"
        />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              {tr.nomSite}
            </Link>
            <div className="nav-links">
              <Link href="/livres">{tr.rubriques.livres.titre}</Link>
              <Link href="/reflexion">{tr.rubriques.reflexion.titre}</Link>
              <Link href="/aparte">{tr.rubriques.aparte.titre}</Link>
              <LangSwitcher courante={langue} />
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <a
            className="contact-link"
            href={`mailto:souslacouverture@yahoo.com?subject=${encodeURIComponent(
              "Contact — " + tr.nomSite
            )}`}
          >
            <svg className="enveloppe" viewBox="0 0 24 24" width="16" height="16">
              <rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3,6.5 L12,13 L21,6.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {tr.contact}
          </a>
          <Link
            href="/discretion"
            className="contact-link"
            style={{ marginLeft: 22 }}
          >
            {DISCRETION[langue] || DISCRETION.fr}
          </Link>
          <a
            className="btn-linkedin"
            href="https://www.linkedin.com/company/sous-la-couverture"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={li.aria}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"
              />
            </svg>
            {li.libelle}
          </a>
          <p className="footer-signature">
            {tr.nomSite} — {tr.signaturePied}
          </p>
        </footer>
      </body>
    </html>
  );
}
