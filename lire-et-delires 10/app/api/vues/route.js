import { NextResponse } from "next/server";
import { incrementerVues } from "../../../lib/vues";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const { slug } = await request.json();

  if (!slug) {
    return NextResponse.json({ erreur: "slug manquant" }, { status: 400 });
  }

  const vues = await incrementerVues(slug);
  return NextResponse.json({ vues });
}
