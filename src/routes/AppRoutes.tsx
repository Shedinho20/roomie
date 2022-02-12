import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NotFoundPage, UserAccountPage } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/:uid" element={<UserAccountPage />} />
      <Route path="/account/" element={<UserAccountPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
