import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const currentContext = useSelector((payload)=> payload.currentContext)
  if (!currentContext.status.isLoggedIn) {
    return <Navigate to="/sign-up" replace />;
  }
  return children;
};

export default ProtectedRoute;
