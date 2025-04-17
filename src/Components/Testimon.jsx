import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Av from '../assets/av.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class Testimon extends Component {
  render() {
    const teamMembers = [
      {
        name: "Eleanor Pena",
        position: "Position, Course",
        image: Av,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in."
      },
      {
        name: "Eleanor Pena",
        position: "Position, Course",
        image: Av,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in."
      }
    ];

    return (
      <div className="py-20 w-full">
        <div className="text-center mb-14">
          <h3 className='font-lato font-bold text-[#1E212C] mb-2'>TESTIMONIALS</h3>
          <h2 className='text-[46px] text-[#1E212C] font-lato font-bold'>What our students say</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-w-[1020px] mx-auto"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg w-full rounded-[4px] px-[104px] py-[64px] text-center">
                <div className="text-left relative">
                  <div className="text-[44px] text-[#FF3F3A] absolute -left-10 -top-2 leading-none">“</div>
                  <p className="text-[#424551] text-base">{member.text}</p>
                </div>
                <div className="flex items-center  gap-5 mt-8">
                  <img src={member.image} alt={member.name} className="w-[60px] h-[60px] rounded-full" />
                  <div className="text-left">
                    <h3 className="text-[#1E212C] font-bold">{member.name}</h3>
                    <p className="text-[#787A80] text-sm">{member.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
