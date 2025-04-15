import React, { Component } from 'react'
import Btn from '../assets/hover.png'
import Illustration from '../assets/illustration.png'
import { NavLink } from "react-router-dom";
import WhoWeAre from '../Components/who_we_are';
import FeaturedCourses from '../Components/FeaturedCourses';
import OurBenefits from '../Components/Our_benefits'

export default class Home extends Component {
  render() {
    return (
      <div>
      <div className='bg-[#f7bf9f] h-screen flex items-center flex-col justify-center pt-[128px]'>
        <div className='container flex justify-between items-center'>
          <div className=''>
            <span className='flex items-center pb-[24px]'>
              <img src={Btn} alt="" />
              <p className='text-[14px] text-[#1E212C] font-bold'>Play showreel</p>
            </span>
            <h2 className='text-[64px] text-[#1E212C] font-bold max-w-[496px] w-full pb-[60px]'>Enjoy studying with Createx Online Courses</h2>
            <span className='flex items-center gap-[24px]'>
              <NavLink className='font-lato font-bold inline-block rounded text-[#FF3F3A] px-[40px] leading-[52px]  border-[2px]  border-[#FF3F3A]' to="/about" activeClassName="active">
                About us
              </NavLink>
              <NavLink className='font-lato font-bold inline-block rounded text-white px-[40px] leading-[52px]  border-[2px]  border-[#FF3F3A] bg-[#FF3F3A]' to="/events" activeClassName="active">
                Explore courses
              </NavLink>
            </span>
          </div>
          <div>
            <img src={Illustration} alt="" />
          </div>
        </div>
        <div className='container mt-[189px] mb-[80px] flex justify-between'>
          <span className='flex items-center'>
            <h2 className='text-[46px] font-bold font-lato text-[#1E212C]'>1200</h2>
            <p className='font-lato text-[#1E212C] ml-3'>Students graduated</p>
            <span className='w-2 h-2 bg-[#FF3F3A] rounded-md ml-[66px]'></span>
          </span>
          <span className='flex items-center'>
            <h2 className='text-[46px] font-bold font-lato text-[#1E212C]'>84</h2>
            <p className='font-lato text-[#1E212C] ml-3'>Completed courses</p>
            <span className='w-2 h-2 bg-[#FF3F3A] rounded-md ml-[66px]'></span>
          </span>
          <span className='flex items-center'>
            <h2 className='text-[46px] font-bold font-lato text-[#1E212C]'>16</h2>
            <p className='font-lato text-[#1E212C] ml-3'>Qualified tutors</p>
            <span className='w-2 h-2 bg-[#FF3F3A] rounded-md ml-[66px]'></span>
          </span>
          <span className='flex items-center'>
            <h2 className='text-[46px] font-bold font-lato text-[#1E212C]'>5</h2>
            <p className='font-lato text-[#1E212C] ml-3'>Years of experience</p>
            <span className='w-2 h-2 bg-[#FF3F3A] rounded-md ml-[66px]'></span>
          </span>
        </div>
      </div>
        <WhoWeAre />
        <FeaturedCourses/>
        <OurBenefits/>
      </div>
    )
  }
}
