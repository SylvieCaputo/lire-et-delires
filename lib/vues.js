import { supabase } from "./supabase";

// Lit le nombre de clics enregistrés pour un article (0 si aucun).
export async function lireVues(slug) {
  const { data } = await supabase
    .from("vues_articles")
    .select("compteur")
    .eq("slug", slug)
    .single();

  return data?.compteur ?? 0;
}

// Ajoute +1 à CHAQUE ouverture d'article (pas de dédoublonnage par visiteur).
// Met à jour la ligne existante ; si elle n'existe pas encore, la crée.
export async function incrementerVues(slug) {
  const actuel = await lireVues(slug);
  const nouveau = actuel + 1;

  const { data: maj, error: errMaj } = await supabase
    .from("vues_articles")
    .update({ compteur: nouveau })
    .eq("slug", slug)
    .select("compteur");

  if (!errMaj && maj && maj.length > 0) {
    return nouveau; // ligne existante mise à jour
  }

  // Aucune ligne à mettre à jour : on la crée
  const { error: errIns } = await supabase
    .from("vues_articles")
    .insert({ slug, compteur: nouveau });

  if (errIns) {
    console.error("Erreur compteur de vues :", errIns.message);
    return actuel;
  }
  return nouveau;
}
