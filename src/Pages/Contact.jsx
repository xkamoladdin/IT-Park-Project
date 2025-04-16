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
               <h6 className='font-bold'>Contact info</h6>
               <h1 className='text-[46px] font-bold'>Get in touch</h1>

               <h6 className='font-bold'>Follow us:</h6>
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
                <h6>Any questions?</h6>
                <h1>Drop us a line</h1>

                <div>
                  la
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}
