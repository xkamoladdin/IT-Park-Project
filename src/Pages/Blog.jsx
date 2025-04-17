import React, { Component } from 'react'
import ourblog from '../assets/ourblog1.png';
import PCimg from '../assets/PCimg.jpg';
import Threeimg from '../assets/threeimgblog.png';
import Glasess from '../assets/glasess.jpg';
import lampaimg from '../assets/lampa.png';
import FAceimg from '../assets/faceimgblog.png';
import Textmachineimg from '../assets/textimg.jpg';
import Mapimgblog from '../assets/mapimgblogimg.png';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="container font-lato">
          <div className='my-[80px]'>
            <div className='font-bold font-lato text-center'>
              <h6>Our blog</h6>
              <h1 className='text-[46px]'>Createx School Journal</h1>
            </div>
            <div className='flex justify-between my-[58px]'>
              <div>
                <ul className='flex gap-[12px]'>
                  <a href="">
                    <li>All</li>
                  </a><a href="">
                    <li>All</li>
                  </a><a href="">
                    <li>All</li>
                  </a><a href="">
                    <li>All</li>
                  </a>
                </ul>
              </div>
              <div className='flex gap-[12px]'>
                <p>Blog category</p>
                <input name="" id="" placeholder='Search blog...'/>
                <input type="text" name="" id="" placeholder='Search blog...'/>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='w-[390px] h-[507px]'>
                <img src={ourblog} alt="" />
                <div className='py-[16px]'>
                  <p className='text-[#424551]'>Marketing | September 4, 2020 | 36 min</p>
                  <h1 className='py-[8px] text-[#1E212C] text-[20px] font-bold'>What is traffic arbitrage and does it really make money?</h1>
                  <p className='py-[8px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                  <a className='py-[16px]' href="#">Listen ➔</a>
                </div>
              </div>
              <div className='w-[390px] h-[507px]'>
                <img src={PCimg} alt="" />
                <div className='py-[16px]'>
                  <p className='text-[#424551]'>Marketing | September 4, 2020 | 36 min</p>
                  <h1 className='py-[8px] text-[#1E212C] text-[20px] font-bold'>What is traffic arbitrage and does it really make money?</h1>
                  <p className='py-[8px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                  <a className='py-[16px]' href="#">Listen ➔</a>
                </div>
              </div>
              <div className='w-[390px] h-[507px]'>
                <img src={Threeimg} alt="" />
                <div className='py-[16px]'>
                  <p className='text-[#424551]'>Marketing | September 4, 2020 | 36 min</p>
                  <h1 className='py-[8px] text-[#1E212C] text-[20px] font-bold'>What is traffic arbitrage and does it really make money?</h1>
                  <p className='py-[8px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                  <a className='py-[16px]' href="#">Listen ➔</a>
                </div>
              </div>
            </div>
            <div className='flex justify-between my-[60px]'>
              <div className='w-[705px] h-[507px]'>
                <img src={Glasess} alt="" />
                <div className='py-[16px]'>
                  <p className='text-[#424551]'>Marketing | September 4, 2020 | 36 min</p>
                  <h1 className='py-[8px] text-[#1E212C] text-[20px] font-bold'>What is traffic arbitrage and does it really make money?</h1>
                  <p className='py-[8px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                  <a className='py-[16px]' href="#">Listen ➔</a>
                </div>
              </div>
              <div className='w-[495px] h-[507px]'>
                <img src={lampaimg} alt="" />
                <div className='py-[16px]'>
                  <p className='text-[#424551]'>Marketing | September 4, 2020 | 36 min</p>
                  <h1 className='py-[8px] text-[#1E212C] text-[20px] font-bold'>What is traffic arbitrage and does it really make money?</h1>
                  <p className='py-[8px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                  <a className='py-[16px]' href="#">Listen ➔</a>
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='w-[390px] h-[507px]'>
                <img src={Mapimgblog} alt="" />
                <div className='py-[16px]'>
                  <p className='text-[#424551]'>Marketing | September 4, 2020 | 36 min</p>
                  <h1 className='py-[8px] text-[#1E212C] text-[20px] font-bold'>What is traffic arbitrage and does it really make money?</h1>
                  <p className='py-[8px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                  <a className='py-[16px]' href="#">Listen ➔</a>
                </div>
              </div>
              <div className='w-[390px] h-[507px]'>
                <img src={FAceimg} alt="" />
                <div className='py-[16px]'>
                  <p className='text-[#424551]'>Marketing | September 4, 2020 | 36 min</p>
                  <h1 className='py-[8px] text-[#1E212C] text-[20px] font-bold'>What is traffic arbitrage and does it really make money?</h1>
                  <p className='py-[8px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                  <a className='py-[16px]' href="#">Listen ➔</a>
                </div>
              </div>
              <div className='w-[390px] h-[507px]'>
                <img src={Textmachineimg} alt="" />
                <div className='py-[16px]'>
                  <p className='text-[#424551]'>Marketing | September 4, 2020 | 36 min</p>
                  <h1 className='py-[8px] text-[#1E212C] text-[20px] font-bold'>What is traffic arbitrage and does it really make money?</h1>
                  <p className='py-[8px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                  <a className='py-[16px]' href="#">Listen ➔</a>
                </div>
              </div>
            </div>
          </div>


          
          <div>
            <img src="" alt="" />
            <div>
              
            </div>
          </div>





        </div>
      </div>
    )
  }
}
