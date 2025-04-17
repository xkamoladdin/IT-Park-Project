import React, { Component } from 'react';
import Certifcateimg from '../assets/certificate.png';
import Strategy from '../assets/logo112.png';
import Cunsulting from '../assets/logo (1).png';
import National from '../assets/logo (2).png';

export default class Certificate extends Component {
  render() {
    return (
      <div className='bg-white'>
        <div className='container px-4 py-[60px] md:py-[120px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
          
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <p className='font-bold text-sm md:text-base text-[#1E212C] mb-2'>Createx Certificate</p>
            <h1 className='text-[32px] md:text-[46px] font-bold text-[#1E212C] leading-tight mb-6'>
              Your expertise will be confirmed
            </h1>
            <p className='text-[#424551] text-sm md:text-base mb-[40px] md:mb-[48px]'>
              We are accredited by international professional <br className='hidden md:block' />
              organizations and institutes:
            </p>
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-6 max-w-[395px] mx-auto lg:mx-0'>
              <img className='w-[90px] h-[44px] object-contain' src={Strategy} alt="Strategy" />
              <img className='w-[90px] h-[44px] object-contain' src={Cunsulting} alt="Consulting" />
              <img className='w-[90px] h-[44px] object-contain' src={National} alt="National" />
            </div>
          </div>

          <div className='w-full lg:w-1/2 flex justify-center'>
            <img src={Certifcateimg} alt="Certificate" className='max-w-full h-auto' />
          </div>
        </div>
      </div>
    );
  }
}
