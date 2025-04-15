import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="container py-[20px] flex justify-between">

      <NavLink exact to="/" activeClassName="active">
        CREATE <span>X</span>
      </NavLink>
      <span>
        <NavLink to="/about" activeClassName="active">
          About Us
        </NavLink>
        <NavLink to="/courses" activeClassName="active">
          Courses
        </NavLink>
        <NavLink to="/events" activeClassName="active">
          Events
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/contacts" activeClassName="active">
          Contacts
        </NavLink>
      </span>
      <span>
        <NavLink to="/about" activeClassName="active">
          Get consultation
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Log in / Register
        </NavLink>
      </span>
    </nav>
  );
}

export default Navigation;