import { T } from "../lib/traductions";

export default function SignatureArticle({ langue = "fr" }) {
  const annee = new Date().getFullYear();
  return (
    <p className="signature-article">
      © {annee} Sylvie Caputo — {T[langue].nomSite}
    </p>
  );
}
