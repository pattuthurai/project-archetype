import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className=" flex overflow-hidden h-screen ">
      <div className="w-full h-full overflow-hidden">
        <div className="px-8 pt-8 pb-[150px] w-full h-[91%] overflow-auto bg-secondary_bg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;