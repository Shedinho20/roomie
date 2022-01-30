import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NotFoundPage } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
