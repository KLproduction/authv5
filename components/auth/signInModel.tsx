"use client";

import { useSignInModel } from "@/hooks/auth";
import ResponsiveModel from "../globel/ResponsiveModel";
import { LoginForm } from "./LoginForm";

export const SignInModel = () => {
  const { close, isOpen, setIsOpen } = useSignInModel();
  return (
    <ResponsiveModel isOpen={isOpen} onOpenChange={setIsOpen}>
      <LoginForm />
    </ResponsiveModel>
  );
};
