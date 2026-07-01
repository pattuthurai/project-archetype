import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router";

import routesConfig from "./router";

function AppRoutes() {
  return useRoutes(routesConfig);
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}