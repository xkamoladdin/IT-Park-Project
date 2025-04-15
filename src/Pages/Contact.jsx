import React, { Component } from 'react'
import Mapimg from '../assets/image.jpg';

export default class Contact extends Component {
  render() {
    return (
      // <div>
      //   <div>
      //   <div className='container'>  
      //   <div className='flex justify-between items-center'>
      //     <div>
      //       <p>Contact Info</p>
      //       <h1>Get in touch</h1>
      //       <div>
      //         <img src="" alt="" />
      //         <p>Talk to us:</p>
      //         <p>hello@createx.com</p>
      //       </div>
      //       <div>
      //         <img src="" alt="" />
      //         <p>Call us:</p>
      //         <p>(405) 555-0128</p>
      //       </div>
      //       <div>
      //         <img src="" alt="" />
      //         <p>Address:</p>
      //         <p>2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
      //       </div>
      //     </div>
      //     <img src={Mapimg} alt="" />
      //   </div>
      //   </div>
      // </div>
      // </div>



      <div>
        <div className='container'>
          <div>
            <div>
              <p>Contact Info</p>
              <h1>Get in touch</h1>
              <div>
                <img src="" alt="" />
                <p>Talk to us:</p>
                <p>hello@createx.com</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Call us:</p>
                <p>(405) 555-0128</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Address:</p>
                <p>2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
              </div>
              <h2>Follow us:</h2>
              <img src="" alt="" />
            </div>
            <img src={Mapimg} alt="" />
          </div>
          <div>
            <p>Any questions?</p>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h1>Drop us a line</h1>
              <div>
                <div>
                  <p>First Name*</p>
                  <input type="text" placeholder='Your first name' />
                </div>
                <div>
                  <p>Email*</p>
                  <input type="text" placeholder='Your working email' />
                </div>
                <div>
                  <p>Last  Name*</p>
                  <input type="text" placeholder='Your last name' />
                </div>
                <div>
                  <p>Phone</p>
                  <input type="text" placeholder='Your phone number' />
                </div>
              </div>
              <p>Message*</p>
              <input type="text" placeholder='Your message' />
              <div>
                <div></div>
                <p>I agree to receive communications from Createx Online School</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
