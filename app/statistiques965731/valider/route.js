import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { tousLesArticles } from "../../../lib/contenu";
import { lireVues } from "../../../lib/vues";

export const dynamic = "force-dynamic";

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function GET(request) {
  const articles = tousLesArticles();
  const vues = {};

  for (const article of articles) {
    vues[article.slug] = Number(await lireVues(article.slug));
  }

  await redis.set("stats:reperes", { date: new Date().toISOString(), vues });

  return NextResponse.redirect(new URL("/statistiques965731", request.url));
}
