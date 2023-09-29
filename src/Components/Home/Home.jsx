/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import "./Home.css";
import BoxShot from '../../assets/Box_Shot_04.png'
import DotBig from '../../assets/dot-big.png'
import DotSmall from '../../assets/dot-small.png'
import WebsiteIntro from '../../assets/01_WEBSITE_INTRO.mp4'


export default function Home() {

  return <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12">
          <div className=" text-center mb-5 mb-md-7 text_animation show">
            <h1><p><strong>@</strong>media</p>
            </h1>
            <div>A smart way to earn rewards for every advertisement you see while watching TV, your favourite film, TV show or while playing a videogame.<br />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="w-full">
          <div className="top__video text-center">
            <img loading="lazy" className="top__video__smalldot" src={DotSmall} alt="dot" />
            <img loading="lazy" className="top__video__bigdot" src={DotBig} alt="dot" />
            <video width="100%" height="auto" muted autoPlay playsInline className="loaded" >
              <source src={WebsiteIntro} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-10 col-8">
          <div className="top__box-image text-center">
            <img loading="lazy" src={BoxShot} alt="MediaBox" />
          </div>
        </div>
      </div>
    </div>
  </>
}