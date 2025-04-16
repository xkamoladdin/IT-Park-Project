import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Men from '../assets/men.png'

const coursesData = [
  {
    id: 1,
    category: "Marketing",
    color: "#03CEA4",
    title: "The Ultimate Google Ads Training Course",
    price: "$100",
    author: "Jerome Bell"
  },
  {
    id: 2,
    category: "Management",
    color: "#5A87FC",
    title: "Product Management Fundamentals",
    price: "$480",
    author: "Marvin McKinney"
  },
  {
    id: 3,
    category: "HR & Recruiting",
    color: "#F89828",
    title: "HR Management and Analytics",
    price: "$200",
    author: "Leslie Alexander Li"
  },
  {
    id: 4,
    category: "Marketing",
    color: "#03CEA4",
    title: "Brand Management & PR Communications",
    price: "$530",
    author: "Kristin Watson"
  },
  {
    id: 5,
    category: "Management",
    color: "#5A87FC",
    title: "Business Development Management",
    price: "$400",
    author: "Dianne Russell"
  },
  {
    id: 6,
    category: "Design",
    color: "#F52F6E",
    title: "Graphic Design Basic",
    price: "$500",
    author: "Guy Hawkins"
  }
]

export default class FeaturedCourses extends Component {
  render() {
    return (
      <div className='container md:px-0'>
        <div className='container flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] gap-4'>
          <span>
            <h3 className='font-bold font-lato uppercase text-[#1E212C] mb-2'>Ready to learn?</h3>
            <h2 className='text-[46px] text-[#1E212C] font-bold font-lato'>Featured Courses</h2>
          </span>
          <NavLink 
            className='font-lato font-bold inline-block rounded text-[#FF3F3A] px-[40px] leading-[52px] border-[2px] border-[#FF3F3A]'
            to="/about"
          >
            View all courses
          </NavLink>
        </div>
        <div className='container flex flex-wrap justify-center md:justify-between gap-[30px] mb-[180px]'>
          {coursesData.map((course) => (
            <div key={course.id} className='flex flex-col sm:flex-row max-w-[600px] w-full items-center sm:items-start gap-[32px] border rounded'>
              <div className='w-[214px] shrink-0'>
                <img src={Men} alt="Course Instructor" className='w-full h-auto' />
              </div>
              <div className='w-full max-w-[322px] flex flex-col justify-center h-[214px]'>
                <div className='flex'>
                  <p 
                    className='text-[14px] font-lato text-white px-2 rounded mb-[20px]' 
                    style={{ backgroundColor: course.color }}
                  >
                    {course.category}
                  </p>
                </div>
                <h2 className='text-[20px] font-bold mb-[20px]'>{course.title}</h2>
                <h3 className='text-[#787A80] text-[18px]'>
                  <span className='text-[#FF4242]'>{course.price}</span> | by {course.author}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
