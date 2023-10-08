import React from 'react';
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from "./Buy.module.css";
export default function Buy() {
  return <>
     <motion.section className={styles.buy}>
      <div className='container m-auto py-20 px-0 sm:px-10 text-center'>
        <motion.div className="buy__video text-center">
          <div className="relative text-center md:w-2/3 mx-auto md:px-10 w-5/6 max-w-max">
            <Parallax scale={[1.5, 1]} opacity={[0.7, 1]}>
              <video width="100%" height="auto" muted loop autoPlay playsInline className={styles.buy__video}>
                <source data-src="https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696252152/03_WEBSITE_SPLITSCREEN_oalnsd.mp4" type="video/mp4" src="https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696252152/03_WEBSITE_SPLITSCREEN_oalnsd.mp4" />
              </video>
            </Parallax>

            <div className="grid grid-cols-12 py-10 sm:py-20 relative">
              <div className="col-span-12 sm:col-span-6 md:col-span-6 text-left">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutDown'>
                  <h2 className="text-3xl sm:text-5xl text-black mb-3"><p>Buy your product<br />with <strong className="text-red-700 font-normal">one click.</strong></p></h2>
                </AnimationOnScroll>
                <AnimationOnScroll delay="500" animateIn="animate__fadeInUp" animateOut='animate__fadeOutDown'>
                  <p className="text-base text-zinc-500 ">If you're interested in the ad shown simply switch to split screen mode. In case, you would like to buy a product from the advert you see, simply press PURCHASE button on your remote control and press it again to confirm your purchase decision.</p>
                </AnimationOnScroll>
              </div>

              <div className="col-span-6 sm:col-span-6 md:col-span-6  absolute right-0 top-[10%]">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutDown'>
                  <div className="flex justify-end">
                    <img loading="lazy" className="-translate-y-[50%]  text-right sm:w-full w-1/3" src="https://atmedia.digital/wp-content/themes/mediaworld/assets/images/remote.png" alt="@ahmed box remote control" />
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  </>
}
