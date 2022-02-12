import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NotFoundPage, UserAccountPage } from "../pages";
import { ProctectedRouteLoggedIn } from "./ProctectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<ProctectedRouteLoggedIn />}>
        <Route path="/account/:uid" element={<UserAccountPage />} />
        <Route path="/account" element={<UserAccountPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
