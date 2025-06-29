"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaUser } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { guestLogin } from "@/actions/guestLogin";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || `/`,
    });
  };

  const handleGuest = () => {
    guestLogin();
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex w-full items-center gap-x-2">
        <Button
          size={"lg"}
          className="w-full"
          variant={"outline"}
          onClick={() => onClick("google")}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button
          size={"lg"}
          className="w-full"
          variant={"outline"}
          onClick={() => onClick("github")}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>

      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={handleGuest}
      >
        <p>Continue as guest</p>
      </Button>
    </div>
  );
};
