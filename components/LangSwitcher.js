"use client";

import { langues } from "../lib/traductions";

const libelles = { fr: "FR", en: "EN", it: "IT" };

export default function LangSwitcher({ courante = "fr" }) {
  function choisir(langue) {
    document.cookie = `langue=${langue}; path=/; max-age=31536000`;
    window.location.reload();
  }

  return (
    <div className="lang-switcher">
      {langues.map((langue) => (
        <button
          key={langue}
          type="button"
          className={"lang-btn" + (langue === courante ? " actif" : "")}
          onClick={() => choisir(langue)}
        >
          {libelles[langue]}
        </button>
      ))}
    </div>
  );
}
