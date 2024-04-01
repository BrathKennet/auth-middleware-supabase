import { FormAuthState } from "@/models/state_forms";
import { FormAuthSchema } from "@/models/zod_schema";
import { signInWithPassword, signOut, signUp } from "./server";
import { redirect } from "next/navigation";

export async function login(
  prevState: FormAuthState,
  formData: FormData
): Promise<FormAuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("asdad");

  const validatedFields = FormAuthSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const error = await signInWithPassword(email, password);

  if (error) {
    return { message: error };
  }

  redirect("/");
}

export async function signup(
  prevState: FormAuthState,
  formData: FormData
): Promise<FormAuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validatedFields = FormAuthSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const error = await signUp(email, password);

  if (error) {
    return { message: error };
  }

  redirect("/");
}

export async function logout(prevState: FormAuthState): Promise<FormAuthState> {
  const error = await signOut();
  if (error) {
    return { message: error };
  }
  redirect("/login");
}

export async function authDefaultError(
  prevState: FormAuthState,
  formData: FormData
): Promise<FormAuthState> {
  return { message: "An error occurred" };
}
