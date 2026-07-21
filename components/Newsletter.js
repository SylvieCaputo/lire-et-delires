"use client";

// Remplace "TON-NOM-BUTTONDOWN" par ton identifiant Buttondown une fois le
// compte créé (visible dans l'URL de ton formulaire d'inscription).
export default function Newsletter() {
  return (
    <div className="newsletter">
      <h3>La lettre de Lire et délire</h3>
      <p>Un envoi, deux fois par mois, sans réclame ni bruit.</p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/TON-NOM-BUTTONDOWN"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open(
            "https://buttondown.email/TON-NOM-BUTTONDOWN",
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
