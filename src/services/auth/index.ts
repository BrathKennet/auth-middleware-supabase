'use server'

import { supabase } from "@/config";

export async function getUser() {
  /* With Supabase ssr */
  /* const supabase = await supabaseServer(); */

  const { data: { user } } = await supabase.auth.getUser()
  
  return user;
}

export async function getSession() {
  /* With Supabase ssr */
  /* const supabase = await supabaseServer(); */
  
  const { data: {session}, error } = await supabase.auth.getSession()

  return session;
}