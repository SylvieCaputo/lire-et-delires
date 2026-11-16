import Link from "next/link";
import { getLangue } from "../lib/langueServeur";

// Page affichée quand l'adresse demandée n'existe pas (erreur 404).
const TEXTES = {
  fr: {
    titre: "Page introuvable",
    phrase:
      "Cette page s'est glissée sous la couverture… et n'en est pas ressortie.",
    retour: "← Retour à l'accueil",
  },
  en: {
    titre: "Page not found",
    phrase: "This page slipped under the cover… and never came back out.",
    retour: "← Back to the home page",
  },
  it: {
    titre: "Pagina non trovata",
    phrase:
      "Questa pagina è scivolata sotto la copertina… e non ne è più uscita.",
    retour: "← Torna alla pagina iniziale",
  },
};

export const metadata = {
  title: "Page introuvable — Sous la couverture",
  robots: { index: false, follow: false },
};

export default function PageIntrouvable() {
  const t = TEXTES[getLangue()] || TEXTES.fr;

  return (
    <div className="below introuvable">
      <h1 className="page-title">{t.titre}</h1>
      <p className="page-lede">{t.phrase}</p>
      <Link href="/" className="back-link">
        {t.retour}
      </Link>
    </div>
  );
}
