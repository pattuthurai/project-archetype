import Home from "../../features/auth/pages/Home";
import Login from "../../features/auth/pages/Login";
import Unauthorized from "../../features/auth/pages/Unauthorized";

export const AUTH_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  UNAUTHORIZED: "*",
} as const;


// Dynamic route config
const authRouteConfig = [
  { path: AUTH_ROUTES.HOME, element: <Home /> },
  { path: AUTH_ROUTES.LOGIN, element: <Login /> },
  { path: AUTH_ROUTES.UNAUTHORIZED, element: <Unauthorized /> }
];

export default authRouteConfig;