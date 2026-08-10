"use client";

import { T } from "../lib/traductions";

// Identifiant Buttondown de Sylvie, utilisé dans les deux liens ci-dessous.
export default function Newsletter({ langue = "fr" }) {
  const n = T[langue].newsletter;
  return (
    <div className="newsletter">
      <h3>{n.titre}</h3>
      <p className="newsletter-sub">{n.sousTitre}</p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/sylvie-caputo"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open("https://buttondown.email/sylvie-caputo", "popupwindow")
        }
      >
        <input type="email" name="email" placeholder={n.placeholder} required />
        <button type="submit">{n.bouton}</button>
      </form>
    </div>
  );
}
