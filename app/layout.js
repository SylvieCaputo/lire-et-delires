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
              <Link href="/livres">Liaisons dangereuses</Link>
              <Link href="/reflexion">Remue-méninges</Link>
              <Link href="/aparte">En aparté</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">Sous la couverture — Depuis 2026</footer>
      </body>
    </html>
  );
}
