import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export const MainRoutes = () => {
  return (
    <Router>
      <AuthRoutes />
      <AppRoutes />
    </Router>
  );
};
