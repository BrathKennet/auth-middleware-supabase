import Data from "@/components/data";
import LoadingAnimation from "@/components/loading-animation";
import ButtonLogout from "@/components/logout-v1";
import ButtonLogoutV2 from "@/components/logout-v2";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="text-gray-300 mx-5 my-8">
      {/* Version 1 - With Route */}
      {/* ------------------- */}
      {/* <ButtonLogout /> */}

      {/* Version 2 - Client  */}
      {/* ------------------- */}
      <ButtonLogoutV2 />
      <p className="text-xl font-bold my-4">Main</p>
      <Suspense fallback={<LoadingAnimation />}>
        <Data />
      </Suspense>
    </main>
  );
}
