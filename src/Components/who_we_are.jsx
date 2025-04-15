import React, { Component } from 'react'
import Home from '../assets/home.png'
import { NavLink } from "react-router-dom";

export default class who_we_are extends Component {
  render() {
    return (
      <div className='container flex justify-between my-[180px] items-center'>
        <div><img src={Home} alt="" /></div>
        <div className='max-w-[390px] w-full'>
            <h3 className='font-bold mb-2 uppercase font-lato'>Who we are</h3>
            <h2 className='text-[46px] font-bold text-[#1E212C] mb-[40px] font-lato'>Why Createx?</h2>
            <span className='flex flex-col gap-3'>
            <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
            <p>Vulputate placerat amet pulvinar lorem nisl.</p>
            <p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
            <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
            <p>Tincidunt sagittis neque sem ac eget.</p>
            <p>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
            </span>
            <NavLink className='mt-[48px] px-[40px] inline-block font-bold rounded bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] text-white leading-[44px]'>
                More about us
            </NavLink>
        </div>
      </div>
    )
  }
}
