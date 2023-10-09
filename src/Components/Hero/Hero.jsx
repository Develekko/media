import React from 'react';
import BoxShot from '../../assets/images/Box_Shot_04.png'
import DotBig from '../../assets/images/dot-big.png'
import DotSmall from '../../assets/images/dot-small.png'
import HeroIntroVideo from '../../assets/videos/01_WEBSITE_INTRO.mp4'
import { motion, useTransform, useScroll } from "framer-motion";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Element } from 'react-scroll';
import styles from './Hero.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { videoLoaded } from '../../Redux/slice/System.slice.js';
export default function Hero() {
    const { scrollYProgress } = useScroll();
    const dispatch = useDispatch()
    const HeroOpacitySection = useTransform(scrollYProgress, [0, 1], [1, 0]);
      let {isVideoLoaded } = useSelector(state => state.system)
    return <>
        <Element name="hero">
            <motion.section
                style={{ opacity: HeroOpacitySection }} id='hero'
                className="flex fixed top-0 w-full text-center h-screen -z-10 pt-24 pb-14 px-3">
                <div className="container">
                    <div className="flex-col justify-center items-center">
                        <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
                            <div className="lg:w-[66%] mx-auto mb-[60px] text-center">
                                <p className='text-[28px] md:text-[32px] lg:text-[46px] mb-7'><strong className="text-red-700">@</strong>ahmed</p>
                                <p className='text-[18px] text-[#919191] mb-5'>A smart way to earn rewards for every advertisement you see while watching TV, your favourite film, TV show or while playing a videogame.</p>
                            </div>
                        </AnimationOnScroll>
                        <div className="lg:w-[66%] mx-auto">
                            <div className="relative w-[80%] m-auto px-4">
                                <img loading="lazy" className="absolute top-0 right-14 translate-x-full -translate-y-28" src={DotSmall} alt="dot" />
                                <img loading="lazy" className="absolute top-0 right-0 translate-x-full translate-y-10" src={DotBig} alt="dot" />
                                <video width="100%" height="auto" muted autoPlay playsInline preload='none'
                                    poster="anyimage.jpg" className={`${styles.hero_video} ${isVideoLoaded&&styles.hero_video__loaded}`}
                                    onLoadedData={() => dispatch(videoLoaded(true))} >
                                    {/* <source src="https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696098491/01_WEBSITE_INTRO_r2fzqf.mp4" type="video/mp4" /> */}
                                    <source src={HeroIntroVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="text-center -z-10 w-[66%] md:w-[83%] mx-auto">
                            <img loading="lazy" src={BoxShot} alt="MediaBox" className='w-[420px] mx-auto' />
                        </div>
                    </div>
                </div>

            </motion.section>
        </Element>

    </>
}
