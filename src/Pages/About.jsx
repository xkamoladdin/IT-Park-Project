import React, { Component } from 'react'
// import { Navlink } from 'react-router-dom'
import human1 from '../assets/about_human1.png'
import play from '../assets/hover.png'
import about2 from '../assets/about_human2.png'
import { LayoutPanelTop } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Target } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import about3 from '../assets/about.png'
import human from '../assets/human.png'
import logo from '../assets/aboutlogo.png'
import { NavLink } from "react-router-dom";



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

        <div>
        <div className='text-center'>
            <p className='text-[#1E212C] font-lato font-bold'>our main directions</p>
            <h1 className='text-[#1E212C] text-[46px] font-black font-lato mt-[8px] mb-[60px]'>What do we teach</h1>
          </div>

          <div>
            <div className='flex justify-between mb-[30px]'>
              <div>
              <img src={card1} alt="" />
              <div className='max-w-[390px] w-full p-[24px] border-[1px] rounded'>
              <span className='bg-[#03CEA4] p-[8px] rounded text-white font-lato font-bold'>Marketing</span>
              <p className='text-[#787A80] font-lato mt-[20px] mb-[20px]'>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
              <NavLink exact to="/courses" activeClassName="active" className='flex gap-[8px] font-lato font-bold'>Check courses <ArrowRight className='text-[#FF3F3A]'/></NavLink>
              </div>
              </div>
              <div>
              <img src={card2} alt="" />
              <div className='max-w-[390px] w-full p-[24px] border-[1px] rounded'>
              <span className='bg-[#5A87FC] p-[8px] rounded text-white font-lato font-bold'>Management</span>
              <p className='text-[#787A80] font-lato mt-[20px] mb-[20px]'>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
              <NavLink exact to="/courses" activeClassName="active" className='flex gap-[8px] font-lato font-bold'>Check courses <ArrowRight className='text-[#FF3F3A]'/></NavLink>
              </div>
              </div>
              <div>
              <img src={card3} alt="" />
              <div className='max-w-[390px] w-full p-[24px] border-[1px] rounded'>
              <span className='bg-[#F89828] p-[8px] rounded text-white font-lato font-bold'>HR & Recruting</span>
              <p className='text-[#787A80] font-lato mt-[20px] mb-[20px]'>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
              <NavLink exact to="/courses" activeClassName="active" className='flex gap-[8px] font-lato font-bold'>Check courses <ArrowRight className='text-[#FF3F3A]'/></NavLink>
              </div>
              </div>
            </div>

            <div className='flex justify-between mb-[180px]'>
              <div>
              <img src={card4} alt="" />
              <div className='max-w-[390px] w-full p-[24px] border-[1px] rounded'>
              <span className='bg-[#F52F6E] p-[8px] rounded text-white font-lato font-bold'>Design</span>
              <p className='text-[#787A80] font-lato mt-[20px] mb-[20px]'>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
              <NavLink exact to="/courses" activeClassName="active" className='flex gap-[8px] font-lato font-bold'>Check courses <ArrowRight className='text-[#FF3F3A]'/></NavLink>




              </div>
              </div>
              <div>
              <img src={card5} alt="" />
              <div className='max-w-[390px] w-full p-[24px] border-[1px] rounded'>
              <span className='bg-[#7772F1] p-[8px] rounded text-white font-lato font-bold'>Development</span>
              <p className='text-[#787A80] font-lato mt-[20px] mb-[20px]'>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
              <NavLink exact to="/courses" activeClassName="active" className='flex gap-[8px] font-lato font-bold'>Check courses <ArrowRight className='text-[#FF3F3A]'/></NavLink>
              </div>
              </div>

                <div className='bg-[#F4F5F6] max-w-[390px] w-full h-420px flex justify-center items-center'>
                <p className='font-lato font-bold text-[30px] text-center'>New studying program <br /> coming soon...</p>
                </div>

            </div>
          </div>


        </div>

        <div>
        <div className='text-left mb-[60px]'>
            <p className='text-[#1E212C] font-lato font-bold'>Studying process</p>
            <h1 className='text-[#1E212C] text-[46px] font-black font-lato mt-[8px]'>That’s how we do it</h1>
          </div>

          <div className='flex justify-between items-center'>
          <div className='ml-[40px]'>
          <div className='max-w-[446px] w-full'>
            <p className='text-[16px] text-[#787A80] font-lato font-black'>STEP 1</p>
            <h3 className='text-[#1E212C] text-[25px] font-lato font-bold'>Watching online video lectures</h3>
            <p className='text-[#787A80] mt-[8px] mb-[32px]'>Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
            </div>

            <div className='max-w-[446px] w-full'>
            <p className='text-[16px] text-[#787A80] font-lato font-black'>STEP 2</p>
            <h3 className='text-[#1E212C] text-[25px] font-lato font-bold'>Passing test</h3>
            <p className='text-[#787A80] mt-[8px] mb-[32px]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. </p>
            </div>

            <div className='max-w-[446px] w-full'>
            <p className='text-[16px] text-[#787A80] font-lato font-black'>STEP 3</p>
            <h3 className='text-[#1E212C] text-[25px] font-lato font-bold'>Curator’s feedback</h3>
            <p className='text-[#787A80] mt-[8px] mb-[32px]'>Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. </p>
            </div>

            <div className='max-w-[446px] w-full'>
            <p className='text-[16px] text-[#787A80] font-lato font-black'>STEP 4</p>
            <h3 className='text-[#1E212C] text-[25px] font-lato font-bold'>Corrections if needed</h3>
            <p className='text-[#787A80] mt-[8px] mb-[32px]'>Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.</p>
            </div>
          </div>

            <div>
              <img src={about3} alt="" />
            </div>
          </div>
        </div>

        <div>
        <div className='text-center mt-[180px] mb-[60px]'>
            <p className='text-[#1E212C] font-lato font-bold'>Best tutors are all here</p>
            <h1 className='text-[#1E212C] text-[46px] font-black font-lato mt-[8px]'>Meet our team</h1>
          </div>

          <div className='flex gap-[30px] mb-[60px]'>
          <div className='text-center'>
          <img src={human} alt="" />
          <p className='text-[#424551] text-[20px] font-lato font-bold mt-[8px] mb-[8px]'>Jerome Bell</p>
          <p className='text-[#787A80] text-[16px] font-lato'>Founder and Program Director</p>
          </div>
          <div className='text-center'>
          <img src={human} alt="" />
          <p className='text-[#424551] text-[20px] font-lato font-bold mt-[8px] mb-[8px]'>Jerome Bell</p>
          <p className='text-[#787A80] text-[16px] font-lato'>Founder and Program Director</p>
          </div>
          <div className='text-center'>
          <img src={human} alt="" />
          <p className='text-[#424551] text-[20px] font-lato font-bold mt-[8px] mb-[8px]'>Jerome Bell</p>
          <p className='text-[#787A80] text-[16px] font-lato'>Founder and Program Director</p>
          </div>
          <div className='text-center'>
          <img src={human} alt="" />
          <p className='text-[#424551] text-[20px] font-lato font-bold mt-[8px] mb-[8px]'>Jerome Bell</p>
          <p className='text-[#787A80] text-[16px] font-lato'>Founder and Program Director</p>
          </div>

          </div>

          <div className='flex gap-[30px] mb-[120px]'>
          <div className='text-center'>
          <img src={human} alt="" />
          <p className='text-[#424551] text-[20px] font-lato font-bold mt-[8px] mb-[8px]'>Jerome Bell</p>
          <p className='text-[#787A80] text-[16px] font-lato'>Founder and Program Director</p>
          </div>
          <div className='text-center'>
          <img src={human} alt="" />
          <p className='text-[#424551] text-[20px] font-lato font-bold mt-[8px] mb-[8px]'>Jerome Bell</p>
          <p className='text-[#787A80] text-[16px] font-lato'>Founder and Program Director</p>
          </div>
          <div className='text-center'>
          <img src={human} alt="" />
          <p className='text-[#424551] text-[20px] font-lato font-bold mt-[8px] mb-[8px]'>Jerome Bell</p>
          <p className='text-[#787A80] text-[16px] font-lato'>Founder and Program Director</p>
          </div>
          <div className='text-center'>
          <img src={human} alt="" />
          <p className='text-[#424551] text-[20px] font-lato font-bold mt-[8px] mb-[8px]'>Jerome Bell</p>
          <p className='text-[#787A80] text-[16px] font-lato'>Founder and Program Director</p>
          </div>

          </div>
        </div>

          <div>
          <div className='text-center mt-[180px] mb-[60px]'>
            <p className='text-[#1E212C] font-lato font-bold'>best jobs for you</p>
            <h1 className='text-[#1E212C] text-[46px] font-black font-lato mt-[8px]'>Our students work here</h1>
          </div>

          <div>
            <div className='flex justify-between mb-[40px]'>
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />

            </div>

            <div className='flex justify-between'>
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />

            </div>
          </div>
          </div>

      </div>
    )
  }
}
