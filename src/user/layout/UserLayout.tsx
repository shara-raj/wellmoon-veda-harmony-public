import { Outlet } from "react-router-dom";
import UserSidebar from "../components/UserSidebar";
import UserTopbar from "../components/UserTopbar";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#faf9f7]">
      <UserSidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        <UserTopbar />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
