// import React, { Component } from 'react'
// import Courseimg from '../assets/image.png';
// import loadingimg from '../assets/Convert.png';
// import Certificate from '../Components/Certificate';
// // import { NavLink } from "react-router-dom";
// import ProManagemant from '../assets/managemantimg.png';
// import HRManagement from '../assets/hrimg.png';
// import brandMarketing from '../assets/brandmarketing.png';
// import GraphDesign from '../assets/designimg.png';
// import BusinessM from '../assets/businnesmanagemantimg.png';
// import Developmentimg from '../assets/development.png';
// import HRHuman from '../assets/human_hr.png';
// import UserDesign from '../assets/design_user.png';

// export default class Courses extends Component {
//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className='text-center my-[80px]'>
//             <p className='font-lato font-bold'>Enjoy your studying!</p>
//             <h1 className='font-lato text-[46px] font-bold'>Our online courses</h1>
//           </div>
//           <div className='flex items-center justify-between font-lato my-[60px]'>
//             <ul className='flex gap-[32px] text-[16px] text-[#9A9CA5] items-center'>
//               <a href="#">
//                 <li className='text-[#FF3F3A] border-2 border-red-500 rounded-lg py-[10px] px-[20px]'>All</li>
//               </a><a href="#">
//                 <li>Marketing</li>
//               </a><a href="#">
//                 <li>Management</li>
//               </a><a href="#">
//                 <li>HR & Recruting</li>
//               </a><a href="#">
//                 <li>Design</li>
//               </a><a href="#">
//                 <li>Development</li>
//               </a>
//             </ul>
//             <input className='border-2 border-gray-500 rounded-lg py-[11px] px-[16px] w-[315px]' type="search" name="" id="" placeholder='Search course...' />
//           </div>

//           <div>
//             <div className='flex justify-between'>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={Courseimg} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[6px] rounded-[4px]'>Marketing</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>The Ultimate Google Ads Training Course</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$100</span> | by Jerome Bell</p>
//                 </div>
//               </div>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={ProManagemant} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#5A87FC] w-[98px] text-[#fff] px-[6px] rounded-[4px]'>Management</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Prduct Management Fundamentals</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$480</span> | by Marvin McKinney</p>
//                 </div>
//               </div>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={HRManagement} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#F89828] w-[111px] text-[#fff] px-[6px]rounded-[4px]'>HR & Recruting</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>HR  Management and Analytics</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$200</span> | by Leslie Alexander Li</p>
//                 </div>
//               </div>
//             </div>
//             <div className='flex justify-between py-[30px]'>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={brandMarketing} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#03CEA4] w-[80px] text-[#fff] px-[6px] rounded-[4px]'>Marketing</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Brand Management & PR Communications</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$530</span> | by Kristin Watson</p>
//                 </div>
//               </div>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={GraphDesign} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#F52F6E] w-[80px] text-[#fff] px-[6px] rounded-[4px]'>Design</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Graphic Design Basic</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$500</span> | by Guy Hawkins</p>
//                 </div>
//               </div>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={BusinessM} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#5A87FC] w-[98px] text-[#fff] px-[6px] rounded-[4px]'>Management</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Business Development Management</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$400</span> | by Dianne Russell</p>
//                 </div>
//               </div>
//             </div>
//             <div className='flex justify-between'>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={Developmentimg} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#7772F1] w-[99px] text-[#fff] px-[6px] rounded-[4px]'>Development</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Highload Software Architecture</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$600</span> | by Brooklyn Simmons</p>
//                 </div>
//               </div>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={HRHuman} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#F89828] w-[111px] text-[#fff] px-[6px] rounded-[4px]'>HR & Recruting</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>Human Resources – Selection and Recruitment</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$150</span> | by Kathryn Murphy</p>
//                 </div>
//               </div>
//               <div className='w-[390px] h-[438px] bg-[#9A9CA50A]'>
//                 <img src={UserDesign} alt="" />
//                 <div className='p-[24px]'>
//                   <p className='bg-[#F52F6E] w-[80px] text-[#fff] px-[6px] rounded-[4px]'>Design</p>
//                   <h2 className='text-[#1E212C] text-[20px] font-bold py-[20px]'>User Experience. Human-centered Design</h2>
//                   <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] py-[20px] font-bold'>$240</span> | by Cody Fisher</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='my-[80px]'>
//             <div className='flex justify-center items-center gap-[10px]'>
//               <img src={loadingimg} alt="" />
//               <a href="#">
//                 <p>Load more</p>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Carousel */}

//         <h1>Carauselni yoz uka</h1>

//         <Certificate/>
//       </div>
//     )
//   }
// }


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

        <div className="text-center mt-20">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Carouselni yoz uka</h1>
        </div>

        <div className="mt-16">
          <Certificate />
        </div>
      </div>
    );
  }
}