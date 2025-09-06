import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
      isActive ? "bg-[#FF9900] text-white" : "text-gray-700 hover:bg-orange-200"
    }`;

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center gap-6 p-4">
        <li>
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/image" className={linkClasses}>
            Architecture Diagram
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
