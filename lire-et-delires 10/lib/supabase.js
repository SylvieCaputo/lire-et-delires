import { createClient } from "@supabase/supabase-js";

// Ce client n'est utilisé que côté serveur (jamais envoyé au navigateur).
// Les deux variables sont à définir dans les réglages du projet Vercel :
// SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
