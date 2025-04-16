import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class OurEvents extends Component {
  render() {
    const events = [
      {
        day: "05",
        month: "August",
        time: "11:00 – 14:00",
        title: "Formation of the organizational structure of the company in the face of uncertainty.",
        type: "Online master-class"
      },
      {
        day: "24",
        month: "July",
        time: "11:00 – 12:30",
        title: "Building a customer service department. Best Practices.",
        type: "Online lecture"
      },
      {
        day: "16",
        month: "July",
        time: "10:00 – 13:00",
        title: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
        type: "Online workshop"
      },
    ];

    return (
      <div className='bg-[#FFF3ED] py-[80px]'>
        <div className='container px-4 max-w-7xl mx-auto'>
          <h3 className='text-[#1E212C] text-center uppercase mb-2 font-lato font-bold'>Our Events</h3>
          <h2 className='text-[32px] sm:text-[36px] md:text-[46px] text-center mb-[60px] font-lato font-bold text-[#1E212C]'>
            Lectures & workshops
          </h2>

          <div className='flex flex-col gap-6 mb-12'>
            {events.map((event, index) => (
              <div
                key={index}
                className='flex flex-col md:flex-row justify-between items-start md:items-center bg-white rounded px-6 py-6 md:px-10 md:py-8 shadow-lg transition-shadow duration-300 group'
              >
                <div className='flex items-center gap-6 mb-4 md:mb-0'>
                  <p className='text-[#FF3F3A] font-lato font-bold text-[40px] md:text-[48px]'>
                    {event.day}
                  </p>
                  <div>
                    <p className='text-[18px] md:text-[20px] font-bold font-lato mb-1'>{event.month}</p>
                    <p className='font-bold text-[#787A80]'>{event.time}</p>
                  </div>
                </div>

                <div className='flex-1 mb-4 md:mb-0 px-2 md:ml-[40px]'>
                  <h3 className='text-[18px] md:text-[20px] font-bold font-lato text-[#1E212C] mb-1'>
                    {event.title}
                  </h3>
                  <p className='text-[#787A80] font-lato font-bold'>{event.type}</p>
                </div>

                <NavLink
                  to="/events"
                  className='text-[#FF3F3A] border border-[#FF3F3A] font-lato font-bold px-6 py-2 rounded bg-transparent hover:text-white hover:bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] transition duration-300'
                >
                  View more
                </NavLink>
              </div>
            ))}
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[40px] justify-center'>
            <p className='text-[#1E212C] text-[24px] sm:text-[28px] font-lato font-bold text-center'>Do you want more?</p>
            <NavLink
              to="/events"
              className='text-[#FF3F3A] border border-[#FF3F3A] font-lato font-bold px-6 py-3 rounded bg-transparent hover:text-white hover:bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] transition duration-300'
            >
              Explore all events
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
