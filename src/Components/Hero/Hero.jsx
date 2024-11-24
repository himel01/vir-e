import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>collectioms</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>latest collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">

        </div>
    </div>
  )
}
