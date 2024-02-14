'use server'

import { supabase } from "@/config";

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  
  return user;
}

export async function getSession() {
  const { data: {session}, error } = await supabase.auth.getSession()

  return session;
}