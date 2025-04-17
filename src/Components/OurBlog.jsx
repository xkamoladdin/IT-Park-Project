import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import OurBlog1 from '../assets/ourblog1.png';
import OurBlog2 from '../assets/ourblog2.png';
import OurBlog3 from '../assets/ourblog3.png';
import { MoveRight } from 'lucide-react';

export default class OurBlog extends Component {
  render() {
    const posts = [
      {
        category: "Marketing",
        date: "September 4, 2020",
        duration: "36 min",
        title: "What is traffic arbitrage and does it really make money?",
        description: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
        cta: "Listen",
        image: OurBlog1,
      },
      {
        category: "Management",
        date: "August 25, 2020",
        duration: "45 min",
        title: "What to do and who to talk to if you want to get feedback on the product",
        description: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
        cta: "Watch",
        image: OurBlog2,
      },
      {
        category: "Design",
        date: "August 8, 2020",
        title: "Should you choose a creative profession if you are attracted to creativity?",
        description: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
        cta: "Read",
        image: OurBlog3,
      },
    ];

    return (
      <div className='container px-4 mt-[60px] md:mt-[120px] mb-[100px] md:mb-[180px]'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-[40px] md:mb-[60px] gap-4'>
          <div>
            <h3 className='font-bold font-lato mb-2 text-lg md:text-xl'>Our blog</h3>
            <h2 className='text-[32px] md:text-[46px] font-bold font-lato'>Latest posts</h2>
          </div>
          <NavLink
            to="/blog"
            className='text-[#FF3F3A] inline-block border border-[#FF3F3A] font-lato font-bold px-6 py-2 rounded bg-transparent hover:text-white hover:bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] transition duration-300 text-center'
          >
            Go to blog
          </NavLink>
        </div>

        {/* Blog Post Cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.map((post, index) => (
            <div key={index} className='bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden'>
              <img src={post.image} alt={post.title} className='w-full h-[200px] object-cover' />
              <div className='p-6'>
                <p className='text-sm text-[#787A80] mb-2'>
                  {post.category} | {post.date}{post.duration ? ` | ${post.duration}` : ""}
                </p>
                <h3 className='text-lg md:text-xl text-[#1E212C] font-lato font-bold mb-2'>{post.title}</h3>
                <p className='font-lato text-[#424551] mb-4'>{post.description}</p>
                <NavLink
                  to="/blog"
                  className='flex items-center gap-1 font-lato font-bold text-[#1E212C] hover:underline'
                >
                  {post.cta}
                  <MoveRight className='text-[#FF3F3A]' size={18} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
