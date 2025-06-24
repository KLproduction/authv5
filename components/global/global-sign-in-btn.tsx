"use client";

import React from "react";
import { Button } from "../ui/button";
import { useSignInModel } from "@/hooks/models";

type Props = {};

const GlobalSignInBtn = (props: Props) => {
  const { open } = useSignInModel();
  return (
    <div>
      <Button onClick={open}>Sign In</Button>
    </div>
  );
};

export default GlobalSignInBtn;
