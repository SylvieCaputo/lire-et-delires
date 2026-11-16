"use client";

import { useState } from "react";
import { T } from "../lib/traductions";

// Étiquette du champ (lue par les lecteurs d'écran) et message affiché
// après l'inscription, à la place du formulaire.
const TEXTES = {
  fr: {
    etiquette: "Votre adresse e-mail",
    merci: "Merci !",
    suite:
      "Un e-mail de confirmation vous attend dans votre boîte : un clic, et le billet doux est à vous.",
  },
  en: {
    etiquette: "Your e-mail address",
    merci: "Thank you!",
    suite:
      "A confirmation e-mail is waiting in your inbox: one click, and the tender note is yours.",
  },
  it: {
    etiquette: "Il vostro indirizzo e-mail",
    merci: "Grazie!",
    suite:
      "Un'e-mail di conferma vi aspetta nella vostra casella: un clic, e il biglietto galante è vostro.",
  },
};

// Identifiant Buttondown de Sylvie, utilisé dans l'adresse d'inscription.
export default function Newsletter({ langue = "fr" }) {
  const n = T[langue].newsletter;
  const t = TEXTES[langue] || TEXTES.fr;
  const [inscrit, setInscrit] = useState(false);

  return (
    <div className="newsletter">
      <h3>{n.titre}</h3>
      <p className="newsletter-sub">{n.sousTitre}</p>

      {/* L'inscription est envoyée à Buttondown dans ce cadre invisible :
          le lecteur reste sur le site et voit le message de remerciement. */}
      <iframe
        name="inscription-newsletter"
        title="Buttondown"
        hidden
        tabIndex={-1}
        aria-hidden="true"
      />

      <form
        action="https://buttondown.email/api/emails/embed-subscribe/sylvie-caputo"
        method="post"
        target="inscription-newsletter"
        onSubmit={() => setTimeout(() => setInscrit(true), 0)}
        hidden={inscrit}
      >
        <input
          type="email"
          name="email"
          placeholder={n.placeholder}
          aria-label={t.etiquette}
          autoComplete="email"
          required
        />
        <button type="submit">{n.bouton}</button>
      </form>

      {inscrit && (
        <p className="newsletter-merci" role="status">
          <strong>{t.merci}</strong> {t.suite}
        </p>
      )}
    </div>
  );
}
