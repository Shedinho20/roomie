import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, ForgotPassword } from "../pages";
import { ProctectedRoute } from "./ProctectedRoute";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<ProctectedRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/resetpassword" element={<ForgotPassword />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
