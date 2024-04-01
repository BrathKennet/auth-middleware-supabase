"use client";

import { TypeButton } from "@/models/enum_models";
import { logout } from "@/services/auth/client";
import { useFormState } from "react-dom";
import SubmitButton from "../auth-form-v2/submit-button";

export default function ButtonLogoutV2() {
  const [formState, formAction] = useFormState(logout, undefined);

  return (
    <form action={formAction}>
      <SubmitButton
        type={TypeButton.DANGER}
        text="Logout"
      />
    </form>
  );
}
