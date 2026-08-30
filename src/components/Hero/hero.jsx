import React from 'react';
import './Hero.css';
import arrowBttn from '../../assets/arrowBttn.webp';
import playicon from '../../assets/playicon.png';
import pauseicon from '../../assets/pauseicon.png';
const Hero = ({heroData, heroCount, setHeroCount, playState,setPlayState}) => {
    return (
        <div className="Hero">
            <div className="herotext">
                <h1>{heroData.text1}</h1>
                <p>{heroData.text2}</p>
            </div>
            <div className="explore">
                <p>Explore The Features</p>
                <img src={arrowBttn} alt="arrow" />
            </div>
            <div className="interaction">
                <div className="dot-play">
                <ul className="herodots">
                    <li onClick={() => setHeroCount(0)}
                    className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)}
                    className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)}
                    className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
            </div>
            <div className="play">
            <img src={playState ? pauseicon : playicon} alt="play" onClick={() => setPlayState(!playState)} />
            <p>see the video</p>
            </div>
            </div>
        </div>
    );
}

export default Hero;
