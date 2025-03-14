import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "@/layout/Layout";
import Login from "@/pages/Login";
import Contact from "@/pages/Contacts";
import Opportunities from "@/pages/Opportunities";
import Task from "@/pages/Task";
import { useAuth } from "@/contexts/AuthContext";
import { ROUTES } from "@/constants";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={ROUTES.LOGIN} element={<Login />} />

    <Route
      element={
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      }
    >
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<Contact />} />
      <Route path={ROUTES.TASKS} element={<Task />} />
      <Route path={ROUTES.OPPORTUNITIES} element={<Opportunities />} />
    </Route>

    <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
  </Routes>
);

export default AppRoutes;
