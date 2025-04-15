import React, { Component } from 'react'
import Talk from "../Components/We_will_talk_abt/talk.jsx"
import Katy from "../Components/About_Katy/about.jsx"
import Eve from "../Components/Benefit_from the_event/event.jsx"
import Sub from "../Components/Events_sub/sub.jsx"
export default class Events extends Component {
  render() {
    return (  
      <div className='container'>
        <div className='text-center'>
        <h2 className='text-[#FF3F3A] font-bold text-align mt-[120px]'>Online lecture</h2>
        <h1 className='font-black font-lato text-[46px] mb-[120px]'>Formation of the organizational structure of the company in the face of uncertainty</h1>
        </div>
        <Talk/>
        <Katy/>
        <Eve/>
        <Sub/>
      </div>
    )
  }
}
