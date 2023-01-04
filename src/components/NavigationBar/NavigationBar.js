import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

function Header() {
  return (
    <nav>
      <NavLink to="/">
        <h1>HRnet</h1>
      </NavLink>
      <NavLink className="navlink" to="/employee-list">
        View Current Employees
      </NavLink>
    </nav>
  );
}

export default Header;
