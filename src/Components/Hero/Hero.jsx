import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand,faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import hero_image from './../Assets/hero-image.jpg';

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>
                    NEW ARRIVALS ONLY
                </h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <FontAwesomeIcon icon={faHand} size='3x'/>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <FontAwesomeIcon icon={faCircleArrowRight}/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero;