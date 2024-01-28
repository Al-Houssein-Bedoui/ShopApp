import React from "react";
import { Navigate } from "react-router-dom";
import { UserRole } from "./UserRole";

function PrivateRoute({ children, allowedRoles }) {
  const role = UserRole();
  console.log(role);

  // Check if there is a valid role
  if (!role) {
    // No valid token or role, redirect to the login page
    return <Navigate to="/signIn" />; // Adjust the redirect route as needed
  }

  // Check if the role is allowed
  if (!allowedRoles.includes(role)) {
    // Redirect to a default route when the role is not allowed
    return <Navigate to="/" />;
  }

  // The role is allowed, render the children
  return <div>{children}</div>;
}

export default PrivateRoute;
