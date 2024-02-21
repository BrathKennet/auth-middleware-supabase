import { supabase } from "@/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);

  /* With Supabase ssr */
  /* const supabase = await supabaseServer(); */

  await supabase.auth.signOut();

  return NextResponse.redirect(url.origin, { status: 301 });
}
