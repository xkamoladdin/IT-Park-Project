import React, { Component } from 'react';
import { Star, ThumbsUp, Layers, MessageCircleMore } from "lucide-react";
import Benefit from '../assets/benefit.png';

export default class OurBenefits extends Component {
  render() {
    return (
      <div className='container py-8 md:py-12 px-4 sm:px-6 mb-16 md:mb-[120px]'>
        <div className='text-center mb-8 md:mb-[60px]'>
          <h3 className='font-bold text-[#1E212C] mb-2 uppercase tracking-wider text-sm sm:text-base'>
            Our benefits
          </h3>
          <h2 className='text-3xl sm:text-4xl md:text-[46px] font-bold font-lato text-[#1E212C]'>
            That's how we do it
          </h2>
        </div>

        <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-0 md:justify-between mb-12 md:mb-[60px]'>
          {[
            { icon: <Star size={20} />, text: 'Experienced Tutors' },
            { icon: <ThumbsUp size={20} />, text: 'Feedback & Support' },
            { icon: <Layers size={20} />, text: '24/7 Online Library' },
            { icon: <MessageCircleMore size={20} />, text: 'Community' }
          ].map((item, index) => (
            <button
              key={index}
              className='
                px-4 py-3 sm:px-6 md:px-8 lg:px-[40px]
                font-bold font-lato text-[#9A9CA5] 
                flex gap-2 items-center justify-center
                hover:text-[#FF3F3A] 
                border-b-2 border-transparent hover:border-[#FF3F3A] 
                transition-colors duration-200
                w-full sm:w-auto
              '
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12'>
          <div className='max-w-full lg:max-w-[495px]'>
            <h2 className='text-2xl sm:text-3xl md:text-[32px] font-bold font-lato text-[#1E212C] mb-4 md:mb-6'>
              Only practicing tutors
            </h2>
            <p className='font-lato text-[#424551] text-base md:text-lg'>
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          
          <div className='w-full max-w-[500px] lg:max-w-none'>
            <img 
              src={Benefit} 
              alt="Benefits illustration" 
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    );
  }
}