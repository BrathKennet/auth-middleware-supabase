"use server";

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

export async function signInWithPassword(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return error?.message;
}

export async function signUp(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  return error?.message;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  return error?.message;
}
