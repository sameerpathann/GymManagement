import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const { pathname } = useLocation();
  if (user) {
    localStorage.setItem("lastPath", pathname);
  }
  return user ? children : <Navigate to={"/"} replace />;
};
export default ProtectedRoute;
