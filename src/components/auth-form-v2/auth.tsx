"use client";

import { TypeAuthForm, TypeButton } from "@/models/enum_models";
import { getAuth } from "@/utils/type-auth";
import Link from "next/link";
import { useFormState } from "react-dom";
import SubmitButton from "./submit-button";

export default function AuthFormV2({
  nameButton,
  alterLink,
  labelLink,
  type,
}: {
  nameButton: string;
  alterLink: string;
  labelLink: string;
  type: TypeAuthForm;
}) {
  const [formState, formAction] = useFormState(getAuth(type), undefined);

  return (
    <div className="sm:w-[400px] sm:mx-0 mx-10 w-full">
      <form
        action={formAction}
        className="bg-cyan-950 w-full px-5 py-8 text-gray-300"
      >
        <div className="mb-8">
          <div className="font-semibold text-xl mb-2">
            <label htmlFor="email">Email</label>
          </div>
          <input
            name="email"
            className="w-full px-3 py-1 font-semibold text-black text-sm"
          />
          <p className="text-red-400">
            {formState?.errors &&
              formState.errors.email &&
              formState.errors.email[0]}
          </p>
        </div>
        <div className="mb-8">
          <div className="font-semibold text-xl mb-2">
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-1 font-semibold text-black text-sm"
          />
          <p className="text-red-400">
            {formState?.errors &&
              formState.errors.password &&
              formState.errors.password[0]}
          </p>
        </div>
        <div className="text-center">
          <SubmitButton
            type={TypeButton.PRIMARY}
            text={nameButton}
           />
        </div>
        <p className="text-red-400">
          {formState?.message && formState.message}
        </p>
        <div className="text-right">
          <Link
            href={alterLink}
            className="text-cyan-600 tracking-wider font-bold hover:text-cyan-500 duration-500"
          >
            {labelLink}
          </Link>
        </div>
      </form>
    </div>
  );
}
