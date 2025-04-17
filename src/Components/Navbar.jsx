import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png'

function Navigation() {
  return (
    <div className="bg-[#f7bf9f]">
    <nav className="container py-[20px] flex justify-between items-center">

      <NavLink exact to="/" activeClassName="active">
        <img src={Logo} alt="" />
      </NavLink>
      <span className="flex gap-[40px] items-center">
        <NavLink className='font-lato font-bold text-[#424551]' to="/about" activeClassName="active">
          About Us
        </NavLink>
        <NavLink className='font-lato font-bold text-[#424551]' to="/courses" activeClassName="active">
          Courses
        </NavLink>
        <NavLink className='font-lato font-bold text-[#424551]' to="/events" activeClassName="active">
          Events
        </NavLink>
        <NavLink className='font-lato font-bold text-[#424551]' to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink className='font-lato font-bold text-[#424551]' to="/contacts" activeClassName="active">
          Contacts
        </NavLink>
      </span>
      <span className="flex gap-[36px] items-center">
        <NavLink className='font-lato font-bold text-white px-[40px] leading-[52px] rounded bg-primary' to="/about" activeClassName="active">
          Get consultation
        </NavLink>
        <NavLink className='font-lato font-bold text-[#424551]' to="/signin" activeClassName="active">
          Log in / Register
        </NavLink>
      </span>
    </nav>
    </div>
  );
}

export default Navigation;