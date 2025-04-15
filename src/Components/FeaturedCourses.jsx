import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Men from '../assets/men.png'


export default class FeaturedCourses extends Component {
  render() {
    return (
      <div className='container'>
        <div className='flex justify-between items-end mb-[60px]'>
            <span>
                <h3 className='font-bold font-lato uppercase text-[#1E212C] mb-2'>Ready to learn?</h3>
                <h2 className='text-[46px] text-[#1E212C] font-bold font-lato'>Featured Courses</h2>
            </span>
            <div>
            <NavLink className='font-lato font-bold inline-block rounded text-[#FF3F3A] px-[40px] leading-[52px]  border-[2px]  border-[#FF3F3A]' to="/about" activeClassName="active">
                View all courses
            </NavLink>
            </div>
        </div>
        <div className='flex flex-wrap justify-between gap-[30px] mb-[180px]'>
        <div className='flex max-w-[600px] w-full items-center gap-[32px] border rounded'>
            <div>
                <img src={Men} alt="" />
            </div>
            <div>
                <div className='flex'>
                <p className='text-[14px] font-lato text-white px-2 bg-[#03CEA4] rounded mb-[20px]'>Marketing</p>
                </div>
                <h2 className='text-[20px] font-bold mb-[20px]'>The Ultimate Google Ads Training Course</h2>
                <h3 className='text-[#787A80] text-[18px]'><span className='text-[#FF4242]'>$100</span> | by Jerome Bell</h3>
            </div>
        </div>
        <div className='flex max-w-[600px] w-full items-center gap-[32px] border rounded'>
            <div>
                <img src={Men} alt="" />
            </div>
            <div>
                <div className='flex'>
                <p className='text-[14px] font-lato text-white px-2 bg-[#03CEA4] rounded mb-[20px]'>Marketing</p>
                </div>
                <h2 className='text-[20px] font-bold mb-[20px]'>The Ultimate Google Ads Training Course</h2>
                <h3 className='text-[#787A80] text-[18px]'><span className='text-[#FF4242]'>$100</span> | by Jerome Bell</h3>
            </div>
        </div>
        <div className='flex max-w-[600px] w-full items-center gap-[32px] border rounded'>
            <div>
                <img src={Men} alt="" />
            </div>
            <div>
                <div className='flex'>
                <p className='text-[14px] font-lato text-white px-2 bg-[#03CEA4] rounded mb-[20px]'>Marketing</p>
                </div>
                <h2 className='text-[20px] font-bold mb-[20px]'>The Ultimate Google Ads Training Course</h2>
                <h3 className='text-[#787A80] text-[18px]'><span className='text-[#FF4242]'>$100</span> | by Jerome Bell</h3>
            </div>
        </div>
        <div className='flex max-w-[600px] w-full items-center gap-[32px] border rounded'>
            <div>
                <img src={Men} alt="" />
            </div>
            <div>
                <div className='flex'>
                <p className='text-[14px] font-lato text-white px-2 bg-[#03CEA4] rounded mb-[20px]'>Marketing</p>
                </div>
                <h2 className='text-[20px] font-bold mb-[20px]'>The Ultimate Google Ads Training Course</h2>
                <h3 className='text-[#787A80] text-[18px]'><span className='text-[#FF4242]'>$100</span> | by Jerome Bell</h3>
            </div>
        </div>
        <div className='flex max-w-[600px] w-full items-center gap-[32px] border rounded'>
            <div>
                <img src={Men} alt="" />
            </div>
            <div>
                <div className='flex'>
                <p className='text-[14px] font-lato text-white px-2 bg-[#03CEA4] rounded mb-[20px]'>Marketing</p>
                </div>
                <h2 className='text-[20px] font-bold mb-[20px]'>The Ultimate Google Ads Training Course</h2>
                <h3 className='text-[#787A80] text-[18px]'><span className='text-[#FF4242]'>$100</span> | by Jerome Bell</h3>
            </div>
        </div>
        <div className='flex max-w-[600px] w-full items-center gap-[32px] border rounded'>
            <div>
                <img src={Men} alt="" />
            </div>
            <div>
                <div className='flex'>
                <p className='text-[14px] font-lato text-white px-2 bg-[#03CEA4] rounded mb-[20px]'>Marketing</p>
                </div>
                <h2 className='text-[20px] font-bold mb-[20px]'>The Ultimate Google Ads Training Course</h2>
                <h3 className='text-[#787A80] text-[18px]'><span className='text-[#FF4242]'>$100</span> | by Jerome Bell</h3>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
