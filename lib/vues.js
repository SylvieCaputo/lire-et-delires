import { Redis } from "@upstash/redis";

// Compteur de vues sur Upstash Redis : service serverless gratuit,
// toujours actif (il ne se met jamais en pause, contrairement à Supabase).
// Les identifiants sont injectés automatiquement par l'intégration Vercel
// (variables UPSTASH_REDIS_REST_* ou KV_REST_API_*). Tant que la base n'est
// pas encore connectée, on renvoie 0 sans faire planter le site.
const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const redis = url && token ? new Redis({ url, token }) : null;

const cle = (slug) => `vues:${slug}`;

// Lit le nombre de clics enregistrés pour un article (0 si aucun).
export async function lireVues(slug) {
  if (!redis) return 0;
  try {
    const n = await redis.get(cle(slug));
    return Number(n) || 0;
  } catch {
    return 0;
  }
}

// Ajoute +1 à CHAQUE ouverture d'article (opération atomique).
// Crée la clé automatiquement si elle n'existe pas encore.
export async function incrementerVues(slug) {
  if (!redis) return 0;
  try {
    return await redis.incr(cle(slug));
  } catch {
    return lireVues(slug);
  }
}
