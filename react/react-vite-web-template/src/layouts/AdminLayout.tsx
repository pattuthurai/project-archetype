import {
  Outlet,
} from "react-router";

export default function SettingsGeneralComponent() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <Outlet />
    </div>
  );
}