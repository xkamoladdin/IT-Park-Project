import React, { Component } from 'react'
import {Star} from "lucide-react"

export default class Our_benefits extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='font-bold text-[#1E212C] mb-2 uppercase'>Our benefits</h3>
        <h2>That’s how we do it</h2>
        <div>
            <p><Star />Experienced Tutors</p>
            <p>Feedback & Support</p>
            <p>24/7 Online Library</p>
            <p>Community</p>
        </div>
      </div>
    )
  }
}
