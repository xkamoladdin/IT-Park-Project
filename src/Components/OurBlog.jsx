import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import OurBlog1 from '../assets/ourblog1.png'
import { MoveRight } from 'lucide-react';

export default class OurBlog extends Component {
  render() {
    return (
      <div className='container mt-[120px] mb-[180px]'>
        <div className='flex justify-between items-center mb-[60px]'>
            <span>
            <h3 className='font-bold font-lato mb-2'>Our blog</h3>
            <h2 className='text-[46px] font-bold font-lato'>Latest posts</h2>
            </span>
            <NavLink
                              to="/blog"
                              className='text-[#FF3F3A] inline-block border border-[#FF3F3A] font-lato font-bold px-6 py-2 rounded bg-transparent hover:text-white hover:bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] transition duration-300'
                            >
                              Go to blog
            </NavLink>
        </div>
        <div className='flex justify-between'>
            <div className='w-[390px]'>
                <img src={OurBlog1} alt="" className='mb-[16px]' />
                <div>
                    <span className=''>
                        <p className='text-[14px] text-[#787A80] mb-2'>Marketing | September 4, 2020 | 36 min</p>
                        <p className='text-[20px] text-[#1E212C] font-lato font-bold mb-2'>What is traffic arbitrage and does it really make money?</p>
                        <p className='font-lato mb-[16px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                        <NavLink className='flex gap-1 items-center font-lato font-bold text-[#1E212C]' to="/blog" activeClassName="active">
                            Listen
                            <MoveRight className='text-[#FF3F3A]' />
                        </NavLink>
                    </span>
                </div>
            </div>
            <div className='w-[390px]'>
                <img src={OurBlog1} alt="" className='mb-[16px]' />
                <div>
                    <span className=''>
                        <p className='text-[14px] text-[#787A80] mb-2'>Management | August 25, 2020 | 45 min</p>
                        <p className='text-[20px] text-[#1E212C] font-lato font-bold mb-2'>What to do and who to talk to if you want to get feedback on the product</p>
                        <p className='font-lato mb-[16px] text-[#424551]'>Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...</p>
                        <NavLink className='flex gap-1 items-center font-lato font-bold text-[#1E212C]' to="/blog" activeClassName="active">
                            Watch
                            <MoveRight className='text-[#FF3F3A]' />
                        </NavLink>
                    </span>
                </div>
            </div>
            <div className='w-[390px]'>
                <img src={OurBlog1} alt="" className='mb-[16px]' />
                <div>
                    <span className=''>
                        <p className='text-[14px] text-[#787A80] mb-2'>Design | August 8, 2020</p>
                        <p className='text-[20px] text-[#1E212C] font-lato font-bold mb-2'>Should you choose a creative profession if you are attracted to creativity?</p>
                        <p className='font-lato mb-[16px] text-[#424551]'>Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...</p>
                        <NavLink className='flex gap-1 items-center font-lato font-bold text-[#1E212C]' to="/blog" activeClassName="active">
                            Read
                            <MoveRight className='text-[#FF3F3A]' />
                        </NavLink>
                    </span>
                </div>
            </div>
            
            </div>
      </div>
    )
  }
}
