// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xyuvulefmgulhkpmhfkg.supabase.co';  // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dXZ1bGVmbWd1bGhrcG1oZmtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzQzNTUsImV4cCI6MjA0ODIxMDM1NX0.Wsc3fJSG47pYHpkSyj0NOPSkgl_KO4lmWF1IIgpOfeo';  // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
