// Met en italique une sous-chaîne (ex. un titre d'ouvrage) à l'intérieur d'un titre.
// Renvoie des nœuds React ; si "aItaliciser" est absent ou introuvable, renvoie le texte tel quel.
export function avecItalique(texte, aItaliciser) {
  const t = String(texte);
  if (!aItaliciser) return t;
  const idx = t.indexOf(aItaliciser);
  if (idx === -1) return t;
  return (
    <>
      {t.slice(0, idx)}
      <em>{aItaliciser}</em>
      {t.slice(idx + aItaliciser.length)}
    </>
  );
}
