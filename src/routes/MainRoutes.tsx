import React from "react";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export const MainRoutes = () => {
  return (
    <>
      <AuthRoutes />
      <AppRoutes />
    </>
  );
};
