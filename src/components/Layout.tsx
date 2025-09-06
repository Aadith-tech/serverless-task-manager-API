import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useWindowWidth } from "../Hooks/useWindowWidth";

const Layout = () => {
  const width = useWindowWidth();
  if (width < 768) {
    return (
      <div className="h-screen flex items-center justify-center p-6 text-red-600 font-extrabold text-xl">
        Mobile access is not allowed Please use laptop/desktop
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
