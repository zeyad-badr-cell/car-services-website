import React from 'react';
import './background.css';
import video1 from '../../assets/video1.mp4';
import images1 from '../../assets/images1.avif';
import images2 from '../../assets/images2.avif';
import images3 from '../../assets/images3.avif';
const Background = ({playState, heroCount}) => {
    if(playState){
        return (
            <video className="background" autoPlay loop muted >
                <source src={video1} type="video/mp4" />
            </video>
        )
    }
    else if(heroCount === 0){
        return (
            <img  src={images1} className="background" key={heroCount} alt=""/>
        )
    }
    else if(heroCount === 1){
        return (
            <img  src={images2} className="background" key={heroCount} alt=""/>
        )
    }
    else if(heroCount === 2){
        return (
            <img  src={images3} className="background" key={heroCount} alt="" />
        )
    }
}
export default Background;