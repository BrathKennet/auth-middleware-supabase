import { supabase } from "@/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(url.origin);
  
}