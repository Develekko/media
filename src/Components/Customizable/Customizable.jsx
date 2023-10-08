import React from 'react';
import { motion } from "framer-motion";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import { Element } from 'react-scroll';
import styles from "./Customizable.module.css";
export default function Customizable() {
  return <>
    <Element name='customizable'>
      <motion.section id="customizable" className={styles.customizable}>
        <div className='container m-auto py-24 px-5 md:px-32 text-center'>
          <div className="grid grid-cols-12 mt-3">
            <div className="col-span-12 md:col-span-8 text-left z-0">
              <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutDown'>
                <p className="uppercase text-zinc-400 text-sm mb-5">CUSTOMIZABLE</p>
                <h2 className="text-black text-3xl md:text-5xl">You can set up all ads completely according to your wishes.</h2>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 md:col-span-8 z-10">
              <video width="100%" height="auto" muted loop autoPlay playsInline className={`${styles.customizable_video} my-10`}>
                <source data-src="https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696345553/04_WEBSITE_CONFIG_AD_lqgrl1.mp4" type="video/mp4" src="https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696345553/04_WEBSITE_CONFIG_AD_lqgrl1.mp4" />
              </video>
            </div>
            <div className="md:col-span-1"></div>
            <div className="col-span-12 md:col-span-3 flex items-center">
              <Swiper
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                  clickable: true,
                  bulletClass: "opacity-100 swiper-pagination-bullet w-4 h-4 rounded-lg",
                }}
                modules={[EffectFade, Keyboard, Pagination]}
                className="mySwiper"
              >
                {[...Array(3)].map((_, index) => {
                  return <SwiperSlide key={index}>
                    <div className="text-left bg-white">
                      <h4 className="text-black text-2xl mb-5">You are in charge</h4>
                      <p className="text-zinc-500 text-base font-normal">Set up your ad preferences by choosing your interests and how often you would like to see the adverts. @ahmed box will match the perfect ads for your needs!</p>
                    </div>
                  </SwiperSlide>
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </Element>
  </>
}
