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

// Incrémente le compteur de vues d'un article de 1 (créé la ligne si besoin).
export async function incrementerVues(slug) {
  const { data: existant } = await supabase
    .from("vues_articles")
    .select("compteur")
    .eq("slug", slug)
    .single();

  if (existant) {
    await supabase
      .from("vues_articles")
      .update({ compteur: existant.compteur + 1 })
      .eq("slug", slug);
    return existant.compteur + 1;
  }

  await supabase.from("vues_articles").insert({ slug, compteur: 1 });
  return 1;
}
