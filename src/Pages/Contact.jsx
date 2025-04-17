import React, { Component } from 'react'
import Mapimg from '../assets/mapimg.jpg';
import ContactMainimg from '../assets/contactimg.png';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className='flex justify-between items-center'>
            <div>
               <h6 className='font-bold font-lato'>Contact info</h6>
               <h1 className='text-[46px] font-bold font-lato'>Get in touch</h1>

               <h6 className='font-bold font-lato'>Follow us:</h6>
            </div>
            <div>
              <img src={Mapimg} alt="" />
            </div>
          </div>

          <main>
            <section className='flex'>
              <div>
                <img src={ContactMainimg} alt="" />
              </div>
              <div>
                <h6 className='font-bold font-lato'>Any questions?</h6>
                <h1 className='font-bold text-[46px] font-lato'>Drop us a line</h1>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}
