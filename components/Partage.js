"use client";

import { useEffect, useState } from "react";

// Boutons de partage en fin d'article : simples liens, aucun script
// de réseau social n'est chargé (aucun traceur).
const LIBELLES = {
  fr: {
    titre: "À ébruiter",
    email: "Par e-mail",
    copier: "Copier le lien",
    copie: "Lien copié !",
    natif: "Partagez où vous voulez…",
  },
  en: {
    titre: "Spread the word",
    email: "By e-mail",
    copier: "Copy link",
    copie: "Link copied!",
    natif: "Share wherever you like…",
  },
  it: {
    titre: "Spargere la voce",
    email: "Via e-mail",
    copier: "Copia link",
    copie: "Link copiato!",
    natif: "Condividete dove volete…",
  },
};

export default function Partage({ url, titre, langue = "fr" }) {
  const l = LIBELLES[langue] || LIBELLES.fr;
  const [copie, setCopie] = useState(false);
  const [natif, setNatif] = useState(false);

  // Le menu de partage du téléphone n'existe pas partout :
  // le bouton n'apparaît que là où il fonctionne.
  useEffect(() => {
    setNatif(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const u = encodeURIComponent(url);

  async function copier() {
    try {
      await navigator.clipboard.writeText(url);
      setCopie(true);
      setTimeout(() => setCopie(false), 2500);
    } catch (e) {
      window.prompt(l.copier, url);
    }
  }

  async function partager() {
    try {
      await navigator.share({ title: titre, url });
    } catch (e) {
      // Partage annulé par le lecteur : rien à faire.
    }
  }

  return (
    <div className="partage">
      <span className="partage-titre">{l.titre}</span>
      <a
        className="partage-btn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="partage-btn"
        href={`https://www.facebook.com/sharer/sharer.php?u=${u}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        className="partage-btn"
        href={`mailto:?subject=${encodeURIComponent(titre)}&body=${u}`}
      >
        {l.email}
      </a>
      <button type="button" className="partage-btn" onClick={copier}>
        {copie ? l.copie : l.copier}
      </button>
      {natif && (
        <button
          type="button"
          className="partage-btn partage-natif"
          onClick={partager}
        >
          {l.natif}
        </button>
      )}
    </div>
  );
}
