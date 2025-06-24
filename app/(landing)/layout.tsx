import { NuqsAdapter } from "nuqs/adapters/next/app";

import SignUpModel from "@/components/modals/sign-up-model";
import SignInModel from "@/components/modals/sign-in-model";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default LandingLayout;
