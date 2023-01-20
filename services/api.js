import { createClient } from '@supabase/supabase-js';
import { API_KEY, PROJECT_URL } from './config';


export const api = createClient(PROJECT_URL, API_KEY);