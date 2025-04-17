import React, { Component } from 'react'
import Courseimg from '../assets/image.png';
import loadingimg from '../assets/Convert.png';
import Certificate from '../Components/Certificate';
// import { NavLink } from "react-router-dom";
import ProManagemant from '../assets/managemantimg.png';
import HRManagement from '../assets/hrimg.png';
import brandMarketing from '../assets/brandmarketing.png';
import GraphDesign from '../assets/designimg.png';
import BusinessM from '../assets/businnesmanagemantimg.png';
import Developmentimg from '../assets/development.png';
import HRHuman from '../assets/human_hr.png';
import UserDesign from '../assets/design_user.png';

export default class Courses extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className='text-center my-[80px]'>
            <p className='font-lato font-bold'>Enjoy your studying!</p>
            <h1 className='font-lato text-[46px] font-bold'>Our online courses</h1>
          </div>
          <div className='flex items-center justify-between font-lato my-[60px]'>
            <ul className='flex gap-[32px] text-[16px] text-[#9A9CA5] items-center'>
              <a href="#">
                <li className='text-[#FF3F3A] border-2 border-red-500 rounded-lg py-[10px] px-[20px]'>All</li>
              </a><a href="#">
                <li>Marketing</li>
              </a><a href="#">
                <li>Management</li>
              </a><a href="#">
                <li>HR & Recruting</li>
              </a><a href="#">
                <li>Design</li>
              </a><a href="#">
                <li>Development</li>
              </a>
            </ul>
            <input className='border-2 border-gray-500 rounded-lg py-[11px] px-[16px] w-[315px]' type="search" name="" id="" placeholder='Search course...' />
          </div>

          <div>
            <div className='flex justify-between'>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={Courseimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={ProManagemant} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Prduct Management Fundamentals</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$480</span> | by Marvin McKinney</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={HRManagement} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>HR  Management and Analytics</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$200</span> | by Leslie Alexander Li</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between py-[30px]'>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={brandMarketing} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Brand Management & PR Communications</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$530</span> | by Kristin Watson</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={GraphDesign} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Graphic Design Basic</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$500</span> | by Guy Hawkins</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={BusinessM} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Business Development Management</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$400</span> | by Dianne Russell</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={Developmentimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Highload Software Architecture</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$600</span> | by Brooklyn Simmons</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={HRHuman} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Human Resources – Selection and Recruitment</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$150</span> | by Kathryn Murphy</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={UserDesign} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>User Experience. Human-centered Design</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$240</span> | by Cody Fisher</p>
                </div>
              </div>
            </div>
          </div>

          <div className='my-[80px]'>
            <div className='flex justify-center items-center gap-[10px]'>
              <img src={loadingimg} alt="" />
              <a href="#">
                <p>Load more</p>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel */}

        <h1>Carauselni yoz uka</h1>

        <Certificate/>
      </div>
    )
  }
}
