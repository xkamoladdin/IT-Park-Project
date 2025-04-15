import React, { Component } from 'react'
// import { Navlink } from 'react-router-dom'
import human1 from '../assets/about_human1.png'

export default class About extends Component {
  render() {
    return (
      <div>


        <div className='container flex justify-between mt-[80px]'>
        <div className='max-w-[600px] w-full'>
          <h2 className='text-[#1E212C] text-[26px] font-lato font-bold'>About Us</h2>
          <h1 className='text-[#1E212C] font-lato font-black text-[46px] mt-[8px] mb-[48px]'>Createx Online School</h1>
          <p className='mb-[48px] text-[#1E212C] text-[20px] font-lato font-bold'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</p>
          <p className='text-[#424551] font-lato mb-[60px]'>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
          <div className='flex gap-[24px]'>
          <a href='#!' className='border-2 px-[40px] py-[10px] border-[#FF3F3A] rounded text-[#FF3F3A]'>Explore events</a>
          <button className='px-[40px] py-[10px] rounded bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] text-white'>Browse courses</button>
          </div>
        </div>
        <div className='flex items-center'>
          <img src={human1} alt="" />
        </div>
        </div>

      </div>
    )
  }
}
