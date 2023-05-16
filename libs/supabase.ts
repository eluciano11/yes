import { createClient } from "@supabase/supabase-js";
import { Database } from "@yes/types/database";

export default function getSupabaseInstance() {
  return createClient<Database>(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );
}
