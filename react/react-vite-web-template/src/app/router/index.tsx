import authRouteConfig from "../../features/auth/routes";
import adminRouteConfig from "../../features/admin/routes";

// Dynamic route config
const routesConfig = [
  ...authRouteConfig,
  ...adminRouteConfig
];

export default routesConfig;