"use client";

import { useEffect, useState } from "react";

export default function CompteurVues({ slug, initial }) {
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

  return (
    <>
      {vues} lecture{vues > 1 ? "s" : ""}
    </>
  );
}
