import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Sous la couverture",
  description:
    "Présentations d'ouvrages, essais et articles de réflexion sur la pédagogie et l'actualité intellectuelle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Archivo+Narrow:wght@500;600&family=PT+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              Sous la couverture
            </Link>
            <div className="nav-links">
              <Link href="/livres">Effeuillages</Link>
              <Link href="/reflexion">Effronteries</Link>
              <Link href="/aparte">Extases</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <a className="contact-link" href="#">
            <svg className="enveloppe" viewBox="0 0 24 24" width="16" height="16">
              <rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3,6.5 L12,13 L21,6.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Liaisons dangereuses
          </a>
          <p className="footer-signature">Sous la couverture — Depuis 2026</p>
        </footer>
      </body>
    </html>
  );
}
