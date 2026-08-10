"use client";

import { useEffect, useState } from "react";
import { T } from "../lib/traductions";

export default function CompteurVues({ slug, initial, langue = "fr" }) {
  const [vues, setVues] = useState(initial);

  useEffect(() => {
    fetch("/api/vues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
      cache: "no-store",
    })
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.vues === "number") setVues(data.vues);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const mots = T[langue].lecture;
  return (
    <>
      {vues} {vues > 1 ? mots[1] : mots[0]}
    </>
  );
}
