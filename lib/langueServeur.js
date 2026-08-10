import { cookies } from "next/headers";
import { langues, langueParDefaut } from "./traductions";

// Lit la langue choisie (stockée dans un cookie) côté serveur.
export function getLangue() {
  const valeur = cookies().get("langue")?.value;
  return langues.includes(valeur) ? valeur : langueParDefaut;
}
