import { supabase } from "./supabase";

// Lit le nombre de vues d'un article. Renvoie 0 si l'article n'a jamais été vu.
export async function lireVues(slug) {
  const { data } = await supabase
    .from("vues_articles")
    .select("compteur")
    .eq("slug", slug)
    .single();

  return data?.compteur ?? 0;
}

// Incrémente le compteur de vues d'un article de 1, de façon atomique
// (via la fonction SQL "incrementer_vue" créée dans Supabase).
export async function incrementerVues(slug) {
  const { data, error } = await supabase.rpc("incrementer_vue", {
    article_slug: slug,
  });

  if (error) {
    console.error("Erreur compteur de vues :", error.message);
    return await lireVues(slug);
  }

  return data;
}
