"use client";

import React from "react";
import { Button } from "../ui/button";
import { useSignUpModel } from "@/hooks/models";

type Props = {};

const GlobalSignUpBtn = (props: Props) => {
  const { open } = useSignUpModel();
  return (
    <div>
      <Button onClick={open}>Sign Up</Button>
    </div>
  );
};

export default GlobalSignUpBtn;
