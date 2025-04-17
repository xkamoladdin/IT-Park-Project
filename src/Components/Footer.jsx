import React from "react";
import { NavLink } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Youtube,
  Send,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "../assets/footer_logo.png";

function Footer() {
  return (
    <footer className="bg-[#1E212C] text-white py-10 text-sm">
      <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row flex-wrap justify-between gap-10 lg:gap-[60px]">
        <div className="w-full sm:w-[300px] text-center lg:text-left">
          <img src={Logo} alt="Createx Logo" className="mx-auto lg:mx-0 mb-4" />
          <p className="leading-relaxed">
            Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.
          </p>
          <div className="mt-4 flex justify-center lg:justify-start space-x-4 text-white text-[20px]">
            <a href="#" aria-label="Facebook" className="hover:text-[#F75E05] transition"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#F75E05] transition"><Twitter size={20} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#F75E05] transition"><Youtube size={20} /></a>
            <a href="#" aria-label="Telegram" className="hover:text-[#F75E05] transition"><Send size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#F75E05] transition"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#F75E05] transition"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <h6 className="font-bold mb-3 text-center sm:text-left">SITE MAP</h6>
          <ul className="space-y-2 text-center sm:text-left">
            <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
            <li><NavLink to="/courses" className="hover:underline">Courses</NavLink></li>
            <li><NavLink to="/events" className="hover:underline">Events</NavLink></li>
            <li><NavLink to="/blog" className="hover:underline">Blog</NavLink></li>
            <li><NavLink to="/contacts" className="hover:underline">Contacts</NavLink></li>
          </ul>
        </div>

        <div className="w-full sm:w-auto">
          <h6 className="font-bold mb-3 text-center sm:text-left">COURSES</h6>
          <ul className="space-y-2 text-center sm:text-left">
            <li><NavLink to="/courses/marketing" className="hover:underline">Marketing</NavLink></li>
            <li><NavLink to="/courses/management" className="hover:underline">Management</NavLink></li>
            <li><NavLink to="/courses/hr" className="hover:underline">HR & Recruiting</NavLink></li>
            <li><NavLink to="/courses/design" className="hover:underline">Design</NavLink></li>
            <li><NavLink to="/courses/development" className="hover:underline">Development</NavLink></li>
          </ul>
        </div>

        <div className="w-full sm:w-auto">
          <h6 className="font-bold mb-3 text-center sm:text-left">CONTACT US</h6>
          <ul className="space-y-2 text-center sm:text-left">
            <li><a href="tel:4055550128" className="hover:underline">(405) 555-0128</a></li>
            <li><a href="mailto:hello@createx.com" className="hover:underline">hello@createx.com</a></li>
          </ul>
        </div>

        <div className="w-full sm:w-[300px]">
          <h6 className="font-bold mb-3 text-center sm:text-left">SIGN UP TO OUR NEWSLETTER</h6>
          <div className="relative mb-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 pr-10 rounded text-black text-sm"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-lg">
              ➔
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center sm:text-left">
            *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 px-4 text-xs flex flex-col md:flex-row items-center justify-between text-center">
        <p className="mb-2 md:mb-0">© All rights reserved. Made with <span className="text-red-500">❤️</span> by Createx Studio</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white hover:underline"
        >
          GO TO TOP
        </button>
      </div>
    </footer>
  );
}

export default Footer;
