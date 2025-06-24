"use client";

import ResponsiveModel from "@/components/global/responsive-model";

import { LoginForm } from "../auth/LoginForm";
import { useSignInModel } from "@/hooks/models";

type Props = {};

const SignInModel = (props: Props) => {
  const { isOpen, close } = useSignInModel();
  return (
    <div>
      <ResponsiveModel isOpen={isOpen} onOpenChange={close}>
        <div>
          <LoginForm noBackground={true} />
        </div>
      </ResponsiveModel>
    </div>
  );
};

export default SignInModel;
