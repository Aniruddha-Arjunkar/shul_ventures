import {NavLink} from "react-router";
import Logo from "../assets/images/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="nav-bar">
      <div className=" navbar-content">

        <NavLink to="/" className="logo">
          <img src={Logo} alt="Shul Ventures Logo"/>
        </NavLink>

        <nav className="nav-menu">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>

          <NavLink to="/jobs" className="nav-link">
            Jobs
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
export default NavBar;
