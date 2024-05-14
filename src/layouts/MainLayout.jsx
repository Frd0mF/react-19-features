import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
