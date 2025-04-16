import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

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
        <div>
            <div></div>
        </div>
      </div>
    )
  }
}
