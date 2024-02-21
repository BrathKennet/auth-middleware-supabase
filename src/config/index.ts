import {
  createRouteHandlerClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

/* With Supabase auth-helpers-nextjs */

export const supabase = createRouteHandlerClient({
  cookies
});

/* const cookiesStore = cookies(); */
/* const supabase = createRouteHandlerClient({
    cookies: () => cookiesStore
  }); */

/* export const supabase = createServerComponentClient({cookies}) */


/* With Supabase ssr */

/* export const supabaseServer = async () => {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options });
        },
      },
    }
  );

  return supabase;
} */
