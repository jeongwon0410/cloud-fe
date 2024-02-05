/* Dependencies */
import React, { useState } from "react";
import Image from "next/image";
import { CredentialResponse } from "@react-oauth/google";

/* Components */
import Footer from "@/components/basic/Footer";
import AfterLogin from "@/components/sidebar/AfterLogin";
import OasisGoogleLoginButton from "@/components/button/OasisGoogleLoginButton";

function SideLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = (credential: CredentialResponse) => {
    setIsLoggedIn(true);
    console.log(credential);
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
      <Footer mb={8} />
    </div>
  );
}
export default SideLogin;
