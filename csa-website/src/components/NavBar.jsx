import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navItems = [
    ["live", "Live Classes"],
    ["material", "Material"],
    ["tasks", "Tasks"],
    ["qna", "QnA"],
  ];

  return (
    <div className="navBar">
      {navItems.map(([navItem, itemValue]) => (
        <NavLink
          key={navItem}
          className={({ isActive }) =>
            isActive ? "navItem active" : "navItem"
          }
          to={`/${navItem}`}
        >
          {itemValue}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
