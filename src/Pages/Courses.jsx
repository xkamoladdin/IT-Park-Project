

import React, { Component } from 'react';
import Courseimg from '../assets/image.png';
import loadingimg from '../assets/Convert.png';
import Certificate from '../Components/Certificate';
import ProManagemant from '../assets/managemantimg.png';
import HRManagement from '../assets/hrimg.png';
import brandMarketing from '../assets/brandmarketing.png';
import GraphDesign from '../assets/designimg.png';
import BusinessM from '../assets/businnesmanagemantimg.png';
import Developmentimg from '../assets/development.png';
import HRHuman from '../assets/human_hr.png';
import UserDesign from '../assets/design_user.png';
import Testimon from '../Components/Testimon'
import FooterTop from '../Components/FooterTop';

const courseData = [
  { img: Courseimg, category: 'Marketing', bg: '#03CEA4', title: 'The Ultimate Google Ads Training Course', price: '$100', author: 'Jerome Bell' },
  { img: ProManagemant, category: 'Management', bg: '#5A87FC', title: 'Product Management Fundamentals', price: '$480', author: 'Marvin McKinney' },
  { img: HRManagement, category: 'HR & Recruiting', bg: '#F89828', title: 'HR Management and Analytics', price: '$200', author: 'Leslie Alexander' },
  { img: brandMarketing, category: 'Marketing', bg: '#03CEA4', title: 'Brand Management & PR Communications', price: '$530', author: 'Kristin Watson' },
  { img: GraphDesign, category: 'Design', bg: '#F52F6E', title: 'Graphic Design Basic', price: '$500', author: 'Guy Hawkins' },
  { img: BusinessM, category: 'Management', bg: '#5A87FC', title: 'Business Development Management', price: '$400', author: 'Dianne Russell' },
  { img: Developmentimg, category: 'Development', bg: '#7772F1', title: 'Highload Software Architecture', price: '$600', author: 'Brooklyn Simmons' },
  { img: HRHuman, category: 'HR & Recruiting', bg: '#F89828', title: 'Human Resources – Selection and Recruitment', price: '$150', author: 'Kathryn Murphy' },
  { img: UserDesign, category: 'Design', bg: '#F52F6E', title: 'User Experience. Human-centered Design', price: '$240', author: 'Cody Fisher' },
];

export default class Courses extends Component {
  render() {
    return (
      <div>
      <div className="container py-10">
        <div className="text-center mb-16">
          <p className="font-lato text-sm sm:text-base font-bold text-gray-600">Enjoy your studying!</p>
          <h1 className="font-lato text-3xl sm:text-4xl font-bold text-gray-900">Our online courses</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <ul className="flex flex-wrap gap-3 justify-center text-sm sm:text-base text-[#9A9CA5]">
            <li className="text-[#FF3F3A] border-2 border-red-500 rounded-lg py-2 px-4 cursor-pointer">All</li>
            <li className="hover:text-red-500 cursor-pointer">Marketing</li>
            <li className="hover:text-red-500 cursor-pointer">Management</li>
            <li className="hover:text-red-500 cursor-pointer">HR & Recruiting</li>
            <li className="hover:text-red-500 cursor-pointer">Design</li>
            <li className="hover:text-red-500 cursor-pointer">Development</li>
          </ul>
          <input className="w-full max-w-xs border-2 border-gray-300 rounded-lg py-2 px-4" type="search" placeholder="Search course..." />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course, index) => (
            <div key={index} className="bg-[#f4f5f7] rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src={course.img} alt="Course" className="w-full h-[200px] object-cover rounded-t-lg" />
              <div className="p-6">
                <p className="text-white text-sm px-3 py-1 rounded mb-4 inline-block" style={{ backgroundColor: course.bg }}>
                  {course.category}
                </p>
                <h2 className="text-[#1E212C] text-lg font-bold mb-4">{course.title}</h2>
                <p className="text-[#787A80] text-base">
                  <span className="text-[#FF4242] font-bold">{course.price}</span> | by {course.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-16">
          <img src={loadingimg} alt="Load more" className="w-6 h-6 mr-2" />
          <a href="#" className="text-red-500 font-semibold">Load more</a>
        </div>

        <Testimon />

        <div className="mt-16">
          <Certificate />
        </div>
      </div>
          <FooterTop />
          </div>
    );
  }
}