/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import "./Home.css";
import HowItWorks from '../HowItWorks/HowItWorks.jsx';
import WhatIs from '../WhatIs/WhatIs.jsx';
import Buy from '../Buy/Buy.jsx';
import Customizable from '../Customizable/Customizable.jsx';
import Hero from '../Hero/Hero.jsx';

export default function Home() {
  return <>
    <Hero />
    <div className="overlay w-full hero-shadow" />
    <WhatIs />
    <HowItWorks />
    <Buy />
    <Customizable />
  </>
}