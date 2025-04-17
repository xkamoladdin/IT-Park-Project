import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import bottomimg from '../assets/bottom_img.png';

export default class FooterTop extends Component {
  render() {
    return (
      <div className="bg-pink-200 w-full">
        <div className="mx-auto text-center px-4">
          <div className="py-16 md:py-[120px]">
            <h6 className="text-[#1E212C] font-bold text-base md:text-lg">Don’t miss anything</h6>
            <h1 className="text-[#1E212C] font-bold text-2xl md:text-[46px] leading-tight mt-4">
              Subscribe to the Createx School <br className="hidden md:block" /> announcements
            </h1>
            <div className="my-8 md:my-[60px] flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                className="w-full md:w-[422px] h-[52px] px-4 rounded border border-gray-300"
                type="text"
                placeholder="Your working email"
              />
              <NavLink
                className="font-lato font-bold text-white leading-[22px] rounded bg-primary px-6 md:px-[40px] py-3 md:py-[15px]"
                to="/about"
              >
                Subscribe
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-[-100px] md:mt-[-180px] flex flex-col md:flex-row justify-between items-center px-4">
          <img className="w-[200px] md:w-[334px] h-auto mb-4 md:mb-0" src={bottomimg} alt="" />
          <img className="w-[200px] md:w-[334px] h-auto" src={bottomimg} alt="" />
        </div>
      </div>
    );
  }
}
