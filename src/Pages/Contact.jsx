import React, { Component } from 'react'
import Mapimg from '../assets/mapimg.jpg';
import ContactMainimg from '../assets/contactimg.png';


export default class Contact extends Component {
  render() {
    return (
      <div>
                <div className="container">
          <div className='flex justify-between my-[80px]'>
            <div>
               <h6 className='font-bold'>Contact info</h6>
               <h1 className='text-[46px] font-bold'>Get in touch</h1>
               <div className='py-[40px]'>
                <div>
                  <p className='text-[14px]'>Talk to us:</p>
                  <p className='text-[18px]'>hello@createx.com</p>
                </div>
                <div className='my-[24px]'>
                  <p className='text-[14px]'>Call us:</p>
                  <p className='text-[18px]'>(405) 555-0128</p>
                </div>
                <div className='my-[24px]'>
                  <p className='text-[14px]'>Address:</p>
                  <p className='text-[18px]'>2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
                </div>
               </div>
               <h6 className='font-bold'>Follow us:</h6>
            </div>
            <div>
              <img src={Mapimg} alt="" />
            </div>
          </div>

          <main className='my-[180px]'>
            <section className='flex justify-between'>
              <div>
                <img src={ContactMainimg} alt="" />
              </div>
              <div>
                <h6 className='font-bold'>Any questions?</h6>
                <h1 className='font-bold text-[46px]'>Drop us a line</h1>

                <div className='flex gap-[25px] my-[40px]'>
                  <div>
                    <label htmlFor="">First Name*</label><br />
                    <input className='w-[340px] border-2 rounded-sm px-[16px] py-[13px]' type="text" name="" id="" placeholder='Your first name' />
                  </div>
                  <div>
                    <label htmlFor="">Last  Name*</label><br /> 
                    <input className='w-[340px] border-2 rounded-sm px-[16px] py-[13px]' type="text" name="" id="" placeholder='Your first name' />
                  </div>
                </div>
                <div className='flex gap-[25px] my-[24px]'>
                  <div>
                    <label htmlFor="">Email*</label><br />
                    <input className='w-[340px] border-2 rounded-sm px-[16px] py-[13px]' type="email" name="" id="" placeholder='Your first name' />
                  </div>
                  <div>
                    <label htmlFor="">Phone</label><br />
                    <input className='w-[340px] border-2 rounded-sm px-[16px] py-[13px]' type="tel" name="" id="" placeholder='Your first name' />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Message*</label><br />
                  <textarea className='w-[705px] h-[128px] border-2 rounded-sm px-[16px] py-[13px]' name="text" id="" placeholder='Your message'></textarea>
                </div>
                <div className='flex my-[48px]'>
                  <input className='' type="checkbox" name="" id="" />
                  <p className='mx-[12px]'>I agree to receive communications from <br /> Createx Online School</p>
                  <NavLink className='font-lato font-bold text-white tex-center px-[117px] leading-[52px] rounded bg-primary mx-[50px] w-[340px]' to="/about" activeClassName="active">Send message</NavLink>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}
