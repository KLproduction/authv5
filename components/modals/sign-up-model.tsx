"use client";

import { useSignUpModel } from "@/hooks/models";
import { RegisterForm } from "../auth/RegisterForm";
import ResponsiveModel from "../global/responsive-model";

type Props = {};

const SignUpModel = (props: Props) => {
  const { isOpen, close } = useSignUpModel();
  return (
    <div>
      <ResponsiveModel isOpen={isOpen} onOpenChange={close}>
        <div>
          <RegisterForm noBackground={true} />
        </div>
      </ResponsiveModel>
    </div>
  );
};

export default SignUpModel;
