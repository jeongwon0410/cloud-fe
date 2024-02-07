import { useState } from "react";
import Image from "next/image";
import { CredentialResponse } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import OasisGoogleLoginButton from "@/components/button/OasisGoogleLoginButton";
import AfterLogin from "@/components/sidebar/AfterLogin";
import signin from "@/apis/signin";

function SideLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const signinMutation = useMutation({
    mutationFn: signin,
    onSuccess: () => {
      setIsLoggedIn(true);
    },
  });

  const onSuccess = (credential: CredentialResponse) => {
    signinMutation.mutate(credential.credential || "");
  };

  return (
    <div className="w-full h-full bg-white flex flex-col self-stretch items-center select-none">
      <Image
        src="/logo/oasis-black.svg"
        alt="logo"
        width={120}
        height={138}
        className="mt-10 w-32 h-auto"
        priority
      />
      <div className="text-4xl font-poppins font-semibold uppercase">OASIS</div>
      <div className="text-lg font-poppins font-semibold">
        Search for the vein of money
      </div>
      <div className="flex flex-col flex-grow mt-9 items-center">
        {!isLoggedIn && (
          <OasisGoogleLoginButton onSuccess={onSuccess} onError={() => {}} />
        )}
        {isLoggedIn && <AfterLogin />}
      </div>
      <div className="mb-8 font-poppins text-sm font-normal">
        Copyright 2024. OASIS. All rights reserved.
      </div>
    </div>
  );
}
export default SideLogin;
