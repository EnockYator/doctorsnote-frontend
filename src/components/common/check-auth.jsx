/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";

/**
 *   Checks Authentication and redirects users to respective pages
 * @param {boolean} isAuthenticated - whether the user is authenticated or not
 * @param {object} user - the user (admin or normal user)
 * @param {component} children - the components to be rendered if the conditions are met
 * @returns {component} - the components to be rendered if conditions are met
 */


function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  

  
  // Redirect unauthenticated users to login
  if (!isAuthenticated) {
    if (!location.pathname.includes("/login") && !location.pathname.includes("/register")) {
      return <Navigate to="/auth/login" />;
    }
  }

  

  // Redirect authenticated users from public or auth pages
  if (
    isAuthenticated &&
    (location.pathname === "/" || location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    if (user?.role === "customer") return <Navigate to="/customer/dashboard" replace />;
    if (user?.role === "doctor") return <Navigate to="/doctor/dashboard" replace />;
    if (user?.role === "admin") return <Navigate to="/admin/dashboard" replace />;
  }

  // Restrict unauthorized access for specific roles
  if (isAuthenticated) {
    if (user?.role === "customer" && location.pathname.includes("/doctor")) {
      return <Navigate to="/customer/dashboard" replace />;
    }
    if (user?.role === "doctor" && location.pathname.includes("/customer")) {
      return <Navigate to="/doctor/dashboard" replace />;
    }
    if (user?.role === "admin" && (location.pathname.includes("/customer") || location.pathname.includes("/doctor"))) {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }

  // Render child components if all conditions pass
  return <>{children}</>;
}

export default CheckAuth;