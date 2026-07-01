import {
  Navigate,
  useLocation
} from "react-router";

// Fake auth and role check
const useAuth = () => {
  return { loggedIn: true, role: "admin" };
};

type RequireAuthProps = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

export function RequireAuth({ children, allowedRoles }: RequireAuthProps) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.loggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}