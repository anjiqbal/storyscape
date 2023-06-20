import {createClient} from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseURL =import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey =import.meta.env.VITE_APP_SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;

