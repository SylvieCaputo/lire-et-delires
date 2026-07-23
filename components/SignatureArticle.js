export default function SignatureArticle() {
  const annee = new Date().getFullYear();
  return (
    <p className="signature-article">
      © {annee} Sylvie Caputo — Sous la couverture
    </p>
  );
}
