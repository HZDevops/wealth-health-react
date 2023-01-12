import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar({ page }) {
  return page === "homepage" ? (
    <nav>
      <NavLink to="/">
        <h1>HRnet</h1>
      </NavLink>
      <NavLink className="navlink" to="/employee-list">
        View Current Employees
      </NavLink>
    </nav>
  ) : (
    <nav>
      <NavLink to="/">
        <h1>HRnet</h1>
      </NavLink>
    </nav>
  );
}

export default NavigationBar;
