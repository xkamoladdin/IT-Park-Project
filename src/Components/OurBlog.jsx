import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import OurBlog1 from '../assets/ourblog1.png'

export default class OurBlog extends Component {
  render() {
    return (
      <div className='container mt-[120px]'>
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
                <img src={OurBlog1} alt="" />
                <div>
                    <span>
                        <p>Marketing | September 4, 2020 | 36 min</p>
                        <p>What is traffic arbitrage and does it really make money?</p>
                        <p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                        <NavLink className='font-lato font-bold text-[#424551]' to="/events" activeClassName="active">
                            Listen
                        </NavLink>
                    </span>
                </div>
            </div>
            <div className='w-[390px]'>
                <img src={OurBlog1} alt="" />
                <div>
                    <span>
                        <p>Management | August 25, 2020 | 45 min</p>
                        <p>What to do and who to talk to if you want to get feedback on the product</p>
                        <p>Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...</p>
                        <NavLink className='font-lato font-bold text-[#424551]' to="/events" activeClassName="active">
                            Watch
                        </NavLink>
                    </span>
                </div>
            </div>
            <div className='w-[390px]'>
                <img src={OurBlog1} alt="" />
                <div>
                    <span>
                        <p>Design | September 4, 2020</p>
                        <p>Should you choose a creative profession if you are attracted to creativity?</p>
                        <p>Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...</p>
                        <NavLink className='font-lato font-bold text-[#424551]' to="/events" activeClassName="active">
                            Read
                        </NavLink>
                    </span>
                </div>
            </div>
            </div>
      </div>
    )
  }
}
