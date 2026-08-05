import {  NavLink } from "react-router";
import  logo from "../assets/images/logo.png";
import "./NavBar.css";

function NavBar(){
    return(
      <header className="nav-bar">
        <div className="container navbar-content">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="Shul Ventures Logo" />
                </NavLink>
            <nav className="nav-menu">
              <NavLink to="/" end className={getLinkClass}>
                 Home
              </NavLink>

             <NavLink to="/about" className={getLinkClass}>
                 About
              </NavLink>

             <NavLink to="/services" className={getLinkClass}>
               Services
             </NavLink>

             <NavLink to="/jobs" className={getLinkClass}>
              Jobs
             </NavLink>

              <NavLink to="/contact" className={getLinkClass}>
               Contact
             </NavLink>
           </nav>
          </div>
     </header>
    )   
}
export default NavBar