import { supabase } from "@/config";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const url = new URL(req.url);

  const formData = await req.formData();
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));

  await supabase.auth.signUp({
    email, password,
    options: {
      emailRedirectTo: `${url.origin}/auth-route/callback`
    }
  });

  return NextResponse.redirect(url.origin, {status: 301})
}