import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};
