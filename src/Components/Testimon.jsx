import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Av from '../assets/av.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default class Testimon extends Component {
  render() {
    return (
      <div>
      <div>
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
                      <span className='flex gap-[20px] items-center mt-6'>
                          <img src={Av} alt="" />
                          <span>
                              <h3 className='font-bold font-lato mb-1'>Eleanor Pena</h3>
                              <p className='text-[#787A80]'>Position, Course</p>
                          </span>
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              </div>
            </div></div>
    )
  }
}
