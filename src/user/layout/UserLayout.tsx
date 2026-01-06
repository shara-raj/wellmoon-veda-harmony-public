import { Outlet } from "react-router-dom";
import UserSidebar from "../components/UserSidebar";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#faf9f7]">
      <UserSidebar />

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
