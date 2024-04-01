import { TypeAuthForm } from "@/models/enum_models";
import { authDefaultError, login, signup } from "@/services/auth/client";

export const getAuth = (v: TypeAuthForm) => {
  switch (v) {
    case TypeAuthForm.LOGIN:
      return login;
    case TypeAuthForm.SIGNUP:
      return signup;
    default:
      return authDefaultError;
  }
};

