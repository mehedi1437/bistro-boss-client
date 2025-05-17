import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Privetroute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={location?.pathname} replace={true}></Navigate>
  );
};

export default Privetroute;
