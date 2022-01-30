import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Istate } from "../store";

export const ProctectedRoute = () => {
  const { auth } = useSelector((state: Istate) => state);
  const { login } = auth;
  return login ? <Navigate to="/" /> : <Outlet />;
};
