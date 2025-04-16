import React, { Component } from 'react';
import Btn from '../assets/hover.png';
import Illustration from '../assets/illustration.png';
import { NavLink } from "react-router-dom";
import WhoWeAre from '../Components/who_we_are';
import FeaturedCourses from '../Components/FeaturedCourses';
import OurBenefits from '../Components/Our_benefits';
import OurEvents from '../Components/OurEvents';
import Certificate from '../Components/Certificate';
import { PlayCircle } from 'lucide-react';
import FooterTop from '../Components/FooterTop'
import Carousel from '../Components/Carousel1';
import OurBlog from '../Components/OurBlog';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='bg-[#f7bf9f] min-h-screen flex flex-col items-center justify-center pt-[100px]'>
          <div className='container flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div className='text-center lg:text-left'>
              <span className='flex justify-center lg:justify-start items-center pb-[24px] gap-2'>
                <PlayCircle className='text-[#FF3F3A]' />
                <p className='text-[14px] text-[#1E212C] font-bold'>Play showreel</p>
              </span>
              <h2 className='text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] text-[#1E212C] font-bold max-w-[496px] w-full pb-[30px] mx-auto lg:mx-0'>
                Enjoy studying with Createx Online Courses
              </h2>
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4'>
                <NavLink className='font-lato font-bold rounded text-[#FF3F3A] px-[32px] py-3 border-2 border-[#FF3F3A]' to="/about">
                  About us
                </NavLink>
                <NavLink className='font-lato font-bold rounded text-white px-[32px] py-3 border-2 border-[#FF3F3A] bg-[#FF3F3A]' to="/events">
                  Explore courses
                </NavLink>
              </div>
            </div>

            <div>
              <img src={Illustration} alt="Illustration" className='max-w-full h-auto' />
            </div>
          </div>

          <div className='container mt-[80px] lg:mt-[150px] mb-[60px] flex justify-between text-center'>
            {[
              { num: "1200", label: "Students graduated" },
              { num: "84", label: "Completed courses" },
              { num: "16", label: "Qualified tutors" },
              { num: "5", label: "Years of experience" }
            ].map((item, i) => (
              <div key={i} className='flex items-center'>
                <h2 className='text-[36px] sm:text-[42px] font-bold font-lato text-[#1E212C]'>{item.num}</h2>
                <p className='font-lato text-[#1E212C] ml-3'>{item.label}</p>
                <span className='w-2 h-2 bg-[#FF3F3A] rounded-md ml-[66px]'></span>
              </div>
            ))}
          </div>
        </div>

        <WhoWeAre />
        <FeaturedCourses />
        <OurBenefits />
        <OurEvents />
        <Certificate />
        <Carousel />
        <OurBlog />
        <FooterTop />
      </div>
    );
  }
}