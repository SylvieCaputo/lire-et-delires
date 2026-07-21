"use client";

// Identifiant Buttondown de Sylvie, utilisé dans les deux liens ci-dessous.
export default function Newsletter() {
  return (
    <div className="newsletter">
      <h3>La lettre de Sous la couverture</h3>
      <p>Un envoi, deux fois par mois, sans réclame ni bruit.</p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/sylvie-caputo"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open(
            "https://buttondown.email/sylvie-caputo",
            "popupwindow"
          )
        }
      >
        <input type="email" name="email" placeholder="votre@email.fr" required />
        <button type="submit">S&apos;inscrire</button>
      </form>
    </div>
  );
}
