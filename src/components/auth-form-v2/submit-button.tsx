"use client";

import { TypeButton } from "@/models/enum_models";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  type,
  text,
}: {
  type: TypeButton;
  text: string;
}) {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      disabled={status.pending}
      className={clsx(
        " px-4 py-2 text-gray-200 font-bold rounded-md  hover:bg-opacity-80 duration-500 mb-5",
        { "bg-opacity-80": status.pending },
        {
          "bg-cyan-800 ": type === TypeButton.PRIMARY,
        },
        {
          "bg-red-600 ": type === TypeButton.DANGER,
        }
      )}
    >
      {status.pending ? `${text}...` : text}
    </button>
  );
}
