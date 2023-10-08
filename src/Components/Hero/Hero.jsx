import React from 'react';
import BoxShot from '../../assets/images/Box_Shot_04.png'
import DotBig from '../../assets/images/dot-big.png'
import DotSmall from '../../assets/images/dot-small.png'
import HeroIntroVideo from '../../assets/videos/01_WEBSITE_INTRO.mp4'
import { motion, useTransform, useScroll } from "framer-motion";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Element } from 'react-scroll';
import styles from './Hero.module.css'
export default function Hero() {
    const { scrollYProgress } = useScroll();
    const HeroOpacitySection = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const [videoIntroLoaded, setVideoIntroLoaded] = React.useState(false);
    return <>
        <Element name="hero">
            <motion.section
                style={{ opacity: HeroOpacitySection }} id='hero'
                className={videoIntroLoaded ? 'flex fixed flex-col justify-start w-full text-center h-screen gap-5 -z-10 pt-5 min-h-screen' : 'opacity-0'}>

                <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
                    <div className="text-center flex flex-col items-center gap-7 justify-center md:w-2/3 mx-auto">
                        <p className='text-5xl'><strong className="text-red-700">@</strong>ahmed</p>
                        <p className='text-large text-zinc-400'>A smart way to earn rewards for every advertisement you see while watching TV, your favourite film, TV show or while playing a videogame.</p>
                    </div>
                </AnimationOnScroll>
                    <div className="relative text-center md:w-2/3 mx-auto md:px-10 w-5/6 mt-5 max-w-max">
                        <img loading="lazy" className="absolute top-0 right-14 translate-x-full -translate-y-28" src={DotSmall} alt="dot" />
                        <img loading="lazy" className="absolute top-0 right-0 translate-x-full translate-y-10" src={DotBig} alt="dot" />
                        <video width="100%" height="auto" muted autoPlay playsInline preload='none'
                            poster="anyimage.jpg" className={`${styles.hero_video} ${videoIntroLoaded ? styles.hero_video__loaded : 'opacity-0'}`}
                            onLoadedData={() => setVideoIntroLoaded(true)} >
                            {/* <source src="https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696098491/01_WEBSITE_INTRO_r2fzqf.mp4" type="video/mp4" /> */}
                            <source src={HeroIntroVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="text-center -z-10">
                        <img loading="lazy" src={BoxShot} alt="MediaBox" className='w-2/3 mx-auto' />
                    </div>
            </motion.section>
        </Element>

    </>
}
