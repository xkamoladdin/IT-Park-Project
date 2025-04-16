// Components/Footer.js
import React from "react";
import Logo from '../assets/footer_logo.png';

function Footer() {
  return (
    <footer>
      {/* <p></p> */}

      <div className="bg-[#1E212C] text-[#fff]">
        <div className="container flex justify-between gap-[80px]">
          <div className="w-[279px]">
            <img src={Logo} alt="" /> <br />
            <p>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
            <div>
              {/* For icons */}
            </div>
          </div>
          <div>
            <h6>SITE MAP</h6>
            <ul>
              <a href="#">
                <li>Courses</li>
              </a>
              <a href="#">
                <li>Courses</li>
              </a>
              <a href="#">
                <li>Courses</li>
              </a>
              <a href="#">
                <li>Courses</li>
              </a>
              <a href="#">
                <li>Courses</li>
              </a>
            </ul>
          </div>
          <div>
            <h6>COURSES</h6>
            <ul>
              <a href="#">
                <li>Marketing</li>
              </a>
              <a href="#">
                <li>Marketing</li>
              </a>
              <a href="#">
                <li>Marketing</li>
              </a>
              <a href="#">
                <li>Marketing</li>
              </a>
              <a href="#">
                <li>Marketing</li>
              </a>
            </ul>
          </div>
          <div>
            <h6>CONTACT US</h6>
            <ul>
              <a href="#">
                <li>(405) 555-0128</li>
              </a>
              <a href="#">
                <li>(405) 555-0128</li>
              </a>
            </ul>
          </div>
          <div>
            <h6>SIGN UP TO OUR NEWSLETTER</h6>
            <input type="text" name="" id="" />
            <p>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
