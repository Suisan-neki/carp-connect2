"use client";

import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import { useEffect } from "react";

export default function AmplifyConfig({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Amplify.configure(config);
  }, []);

  return <>{children}</>;
}
