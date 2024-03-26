import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vieztjozjeweqysbairs.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpZXp0am96amV3ZXF5c2JhaXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMTIwNDgsImV4cCI6MjAxMDg4ODA0OH0.0h1pHvp-3PsWLjR3k5U6mHlzWhNTQa4Q3gw3dNF0-ic";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
