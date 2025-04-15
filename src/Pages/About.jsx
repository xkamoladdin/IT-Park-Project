import React, { Component } from 'react'
// import { Navlink } from 'react-router-dom'
import human1 from '../assets/about_human1.png'
import play from '../assets/hover.png'
import about2 from '../assets/about_human2.png'
import { LayoutPanelTop } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Target } from 'lucide-react';


export default class About extends Component {
  render() {
    return (
      <div className='container'>


        <div className='flex justify-between mt-[80px] mb-[180px]'>
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

        <div className='flex justify-between items-center mb-[180px]'>
        <div>
          <span className='flex items-center gap-[16px] mb-[32px]'>
            <img src={play} alt="" />
            <p>Watch Video</p>
          </span>
          <img src={about2} alt="" />
        </div>
        <div>
        <p className='text-[#1E212C] text-[18px] font-bold flex items-center gap-[16px]'><span className='text-[#FF3F3A] text-[48px] font-black font-lato'>1200</span>students graduated</p>
        <p className='text-[#1E212C] text-[18px] font-bold flex items-center gap-[16px]'><span className='text-[#FF3F3A] text-[48px] font-black font-lato'>84</span>completed courses</p>
        <p className='text-[#1E212C] text-[18px] font-bold flex items-center gap-[16px]'><span className='text-[#FF3F3A] text-[48px] font-black font-lato'>16</span>qualified tutors</p>
        <p className='text-[#1E212C] text-[18px] font-bold flex items-center gap-[16px]'><span className='text-[#FF3F3A] text-[48px] font-black font-lato'>5</span>years of experience</p>
        </div>
        </div>

        <div>
          <div className='text-center'>
            <p className='text-[#1E212C] font-lato font-bold'>We always stand for</p>
            <h1 className='text-[#1E212C] text-[46px] font-black font-lato mt-[8px] mb-[60px]'>Our core values</h1>
          </div>

          <div className='flex justify-between mb-[180px]'>
          <div className='max-w-[240px] w-full flex flex-col items-center'>
            <span className='text-[#FF3F3A] mb-[24px]'>
          <LayoutPanelTop />
            </span>
            <p className='mb-[8px] text-[20px] font-bold text-[#1E212C]'>Structured Approach</p>
            <p className='text-[#787A80]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.</p>
          </div>
          <div className='max-w-[240px] w-full flex flex-col items-center'>
            <span className='text-[#FF3F3A] mb-[24px]'>
            <MessageCircleMore />
            </span>
            <p className='mb-[8px] text-[20px] font-bold text-[#1E212C]'>Professional Feedbacks</p>
            <p className='text-[#787A80]'>Culpa nostrud commodo ea consequat reprehenderit aliquip. </p>
          </div>
          <div className='max-w-[240px] w-full flex flex-col items-center'>
            <span className='text-[#FF3F3A] mb-[24px]'>
          <Target />
            </span>
            <p className='mb-[8px] text-[20px] font-bold text-[#1E212C]'>Efficiency</p>
            <p className='text-[#787A80]'>Viverra scelerisque consequat net. Adipisicing esse consequat. .</p>
          </div>
          <div className='max-w-[240px] w-full flex flex-col items-center'>
            <span className='text-[#FF3F3A] mb-[24px]'>
          <CalendarDays />
            </span>
            <p className='mb-[8px] text-[20px] font-bold text-[#1E212C]'>Flexible Shedule</p>
            <p className='text-[#787A80]'>Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p>
          </div>

          </div>
        </div>
      </div>
    )
  }
}
