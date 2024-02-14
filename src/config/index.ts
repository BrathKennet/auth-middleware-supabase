import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const supabase = createRouteHandlerClient({
  cookies
});

/* const cookiesStore = cookies(); */
/* const supabase = createRouteHandlerClient({
    cookies: () => cookiesStore
  }); */

/* export const supabase = createServerComponentClient({cookies}) */