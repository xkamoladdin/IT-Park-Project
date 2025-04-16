import React, { Component } from 'react'
import Certifcateimg from '../assets/certificate.png';
import Strategy from '../assets/logo112.png';
import Cunsulting from '../assets/logo (1).png';
import National from '../assets/logo (2).png';

export default class Certificate extends Component {
  render() {
    return (
      <div>
          <div className='container flex justify-between items-center py-[120px]'>
            <div>
              <p className='font-bold'>Createx Certificate</p>
              <h1 className='text-[46px] font-bold'>Your expertise will be confirmed</h1>
              <p className='py-[48px]'>We are accredited by international professional <br /> organizations and institutes:</p>
              <div className='flex justify-between items-center max-w-[395px]'>
                <img className='w-[105px] h-[50px]' src={Strategy} alt="" />
                <img className='w-[105px] h-[50px]' src={Cunsulting} alt="" />
                <img className='w-[105px] h-[50px]' src={National} alt="" />
              </div>
            </div>
            <div>
              <img src={Certifcateimg} alt="" />
            </div>
          </div>
      </div>
    )
  }
}
