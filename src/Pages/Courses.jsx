import React, { Component } from 'react'

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
            <input className='border-2 border-gray-500 rounded-lg py-[11px] px-[16px] w-[315px]' type="search" name="" id="" placeholder='Search course...'/>
          </div>

          <div>
            <div>
              <div>
                
              </div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
