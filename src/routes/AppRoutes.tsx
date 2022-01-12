import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
