import {
  Outlet,
} from "react-router";

import { RequireAuth } from "../../app/router/auth.context";
import AdminLayout from "../../layouts/AdminLayout";
import Profile from "./pages/Profile";
import SettingsGeneral from "./pages/SettingGeneral";
import SettingsSecurity from "./pages/SettingSecurity";

export const ADMIN_ROUTES  = {
  ADMIN: "/admin",
  ADMIN_PROFILE: "/admin/profile",
  SETTING_GENERAL: "/admin/settings/general",
  SETTING_SECURITY: "/admin/settings/security",
} as const;

const adminRouteConfig = [
  {
    path: "admin",
    element: (
      <RequireAuth allowedRoles={["user", "admin"]}>
        <AdminLayout />
      </RequireAuth>
    ),
    children: [
      { path: "profile", element: <Profile /> },
      {
        path: "settings",
        element: <Outlet />,
        children: [
          { path: "general", element: <SettingsGeneral /> },
          { path: "security", element: <SettingsSecurity /> }
        ]
      }
    ]
  }
];

export default adminRouteConfig;