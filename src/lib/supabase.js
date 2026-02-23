import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ndgyohqsbkzigfoewynj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kZ3lvaHFzYmt6aWdmb2V3eW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MTMyMTYsImV4cCI6MjA4NzM4OTIxNn0.4gDD0nF5BzeaggSLr-8m7Uz2BruSMtbTZ1OwidK52js"
);