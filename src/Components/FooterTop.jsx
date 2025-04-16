import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import bottomimg from '../assets/bottom_img.png'; 

export default class FooterTop extends Component {
  render() {
    return (
      <div>
        <div className='bg-[pink] w-full'>
          <div className='container text-center'>
            <div className='py-[120px]'>
                <h6 className='text-[#1E212C] font-bold'>Don’t miss anything</h6>
                <h1 className='text-[#1E212C] text-[46px] font-bold'>Subscribe to the Createx School <br /> announcements</h1>
                <div className='my-[60px]'>
                  <input className='w-[422px] h-[52px] px-[16px] rounded' type="text" name="" id="" placeholder='Your working email'/>
                  <NavLink className='font-lato font-bold text-white leading-[52px] rounded bg-primary mx-[24px] px-[40px] py-[15px]' to="/about" activeClassName="active">Subscribe</NavLink>
                </div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
             <img className='w-[334px] h-[246px]' src={bottomimg} alt="" />
             <img className='w-[334px] h-[246px]' src={bottomimg} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
