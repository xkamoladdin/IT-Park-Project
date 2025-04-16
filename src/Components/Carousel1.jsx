import React, { Component, createRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Av from '../assets/av.png'

import Woman from '../assets/women.png';
import Woman1 from '../assets/women1.png';
import Men1 from '../assets/men1.png';
import Men2 from '../assets/men2.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const teamMembers = [
  {
    name: 'Dianne Russell',
    role: 'Founder and CEO',
    img: Woman,
  },
  {
    name: 'Jerome Bell',
    role: 'Founder and Program Director',
    img: Men1,
  },
  {
    name: 'Kristin Watson',
    role: 'Marketer, Curator of Marketing Course',
    img: Woman1,
  },
  {
    name: 'Marvin McKinney',
    role: 'PM, Curator of Management Course',
    img: Men2,
  },
  {
    name: 'Eleanor Pena',
    role: 'UX Designer',
    img: Woman,
  },
];

export default class TeamCarousel extends Component {
  prevRef = createRef();
  nextRef = createRef();

  render() {
    return (
        <div className='bg-[#F4F5F6] py-[120px]'>

        <div className='container'>
      <div className="container mb-[180px]">
        <div className="flex justify-between items-center mb-[60px]">
          <div>
            <h3 className="text-[#1E212C] font-bold font-lato text-lg mb-2">
              Best tutors are all here
            </h3>
            <h2 className="text-[46px] text-[#1E212C] font-bold font-lato leading-tight">
              Meet our team
            </h2>
          </div>
          <div className="flex space-x-4">
            <button ref={this.prevRef} className="px-4 py-2 bg-[#F4F5F6] text-[#424551] rounded-full hover:bg-[#E0E2E3]">
              ‹
            </button>
            <button ref={this.nextRef} className="px-4 py-2 bg-[#F4F5F6] text-[#424551] rounded-full hover:bg-[#E0E2E3]">
              ›
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: this.prevRef.current,
            nextEl: this.nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = this.prevRef.current;
                swiper.params.navigation.nextEl = this.nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }, 0);
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="w-[285px]">
              <div className="">
                <img
                  src={member.img}
                  alt={member.name}
                  className="bg-yellow-300 rounded"
                />
                <h2 className="text-center text-[20px] text-[#424551] font-bold font-lato mt-4 mb-1">{member.name}</h2>
                <h3 className="text-center font-lato text-[#787A80]">{member.role}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=''>
        <h3 className='text-center font-lato font-bold text-[#1E212C] mb-2'>TESTIMONIALS</h3>
        <h2 className='text-[46px] text-[#1E212C] font-lato font-bold text-center mb-[60px]'>What our students say</h2>
        <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: this.prevRef.current,
            nextEl: this.nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = this.prevRef.current;
                swiper.params.navigation.nextEl = this.nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }, 0);
          }}
         
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="w-[1020px]">
              <div className="max-w-[1020px] mx-auto bg-white py-[64px] px-[104px]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                <span>
                    <img src={Av} alt="" />
                    <span>
                        <h3>Eleanor Pena</h3>
                        <p>Position, Course</p>
                    </span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>  
        </div>
      </div>
      </div>
      </div>

    );
  }
}
