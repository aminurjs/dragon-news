import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(location);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
