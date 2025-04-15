import React, { Component } from 'react'
import Courseimg from '../assets/image.png';
import loadingimg from '../assets/Convert.png';
import Strategy from '../assets/logo112.png';
import Cunsulting from '../assets/logo (1).png';
import National from '../assets/logo (2).png';
import Certifcateimg from '../assets/certificate.png';
import { NavLink } from "react-router-dom";

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
                <img src={Courseimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={Courseimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between py-[30px]'>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={Courseimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={Courseimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={Courseimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
                </div>
              </div>
            </div>
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
                <img src={Courseimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
                </div>
              </div>
              <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
                <img src={Courseimg} alt="" />
                <div className='p-[24px]'>
                  <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[5px] py-[1px]'>Marketing</p>
                  <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
                  <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
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



        <section>
          <div className='container flex justify-between'>
            <div>
              <p className='font-bold'>Createx Certificate</p>
              <h1 className='text-[46px] font-bold'>Your expertise will be confirmed</h1>
              <p className='py-[48px]'>We are accredited by international professional <br /> organizations and institutes:</p>
              <div className='flex justify-between items-center max-w-[395px] my-[32px]'>
                <img className='w-[105px] h-[50px]' src={Strategy} alt="" />
                <img className='w-[105px] h-[50px]' src={Cunsulting} alt="" />
                <img className='w-[105px] h-[50px]' src={National} alt="" />
              </div>
            </div>
            <div>
              <img src={Certifcateimg} alt="" />
            </div>
          </div>
        </section>
        <section className='bg-[#FFC0CB] h-[564px]'>
          <div className='container text-center w-[810px] py-[120px]'>
            <h6 className='font-lato font-bold'>Don’t miss anything</h6>
            <h1 className='font-lato font-bold text-[46px]'>Subscribe to the Createx School announcements</h1>
            {/* <p></p> */}
            <div className='py-[60px]'>
              <input type="text" name="" id="" placeholder='Your working email'/>
              <NavLink className='font-lato font-bold text-white px-[40px] leading-[52px] rounded bg-primary' to="/about" activeClassName="active">Get consultation</NavLink>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
