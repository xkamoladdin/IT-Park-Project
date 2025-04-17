import React, { Component, createRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Av from '../assets/av.png';

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
  prevRef1 = createRef();
  nextRef1 = createRef();
  prevRef2 = createRef();
  nextRef2 = createRef();

  render() {
    return (
      <div className='bg-[#F4F5F6] py-[60px] md:py-[120px]'>
        <div className='container px-4'>

          <div className="mb-[80px] md:mb-[180px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[40px] md:mb-[60px] gap-4">
              <div>
                <h3 className="text-[#1E212C] font-bold font-lato text-base md:text-lg mb-2">
                  Best tutors are all here
                </h3>
                <h2 className="text-[32px] md:text-[46px] text-[#1E212C] font-bold font-lato leading-tight">
                  Meet our team
                </h2>
              </div>
              <div className="flex space-x-4">
                <button ref={this.prevRef1} className="px-4 py-2 bg-[#F4F5F6] text-[#424551] rounded-full hover:bg-[#E0E2E3]">
                  ‹
                </button>
                <button ref={this.nextRef1} className="px-4 py-2 bg-[#F4F5F6] text-[#424551] rounded-full hover:bg-[#E0E2E3]">
                  ›
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={4}
              navigation={{
                prevEl: this.prevRef1.current,
                nextEl: this.nextRef1.current,
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = this.prevRef1.current;
                  swiper.params.navigation.nextEl = this.nextRef1.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }, 0);
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full max-w-[285px] mx-auto">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded w-full h-auto"
                    />
                    <h2 className="text-center text-lg md:text-[20px] text-[#424551] font-bold font-lato mt-4 mb-1">{member.name}</h2>
                    <h3 className="text-center font-lato text-[#787A80] text-sm">{member.role}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <h3 className='text-center font-lato font-bold text-[#1E212C] text-base md:text-lg mb-2'>TESTIMONIALS</h3>
            <h2 className='text-[32px] md:text-[46px] text-[#1E212C] font-lato font-bold text-center mb-[40px] md:mb-[60px]'>What our students say</h2>
            <div className="flex justify-center mb-6">
              <button ref={this.prevRef2} className="px-4 py-2 bg-[#F4F5F6] text-[#424551] rounded-full hover:bg-[#E0E2E3] mx-1">
                ‹
              </button>
              <button ref={this.nextRef2} className="px-4 py-2 bg-[#F4F5F6] text-[#424551] rounded-full hover:bg-[#E0E2E3] mx-1">
                ›
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: this.prevRef2.current,
                nextEl: this.nextRef2.current,
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = this.prevRef2.current;
                  swiper.params.navigation.nextEl = this.nextRef2.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }, 0);
              }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white max-w-[1020px] w-full mx-auto px-6 md:px-[104px] py-[40px] md:py-[64px] rounded shadow-md">
                    <p className="text-[#424551] text-sm md:text-base leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non...
                    </p>
                    <div className='flex gap-4 items-center mt-6'>
                      <img src={Av} alt="Avatar" className="w-14 h-14 rounded-full" />
                      <div>
                        <h3 className='font-bold font-lato mb-1'>{member.name}</h3>
                        <p className='text-[#787A80] text-sm'>Position, Course</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    );
  }
}
