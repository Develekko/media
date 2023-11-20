import React from 'react';
import MediaBox from '../../assets/images/MediaBox_Rot_01_00015.png'
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Element } from 'react-scroll';
import styles from "./WhatIs.module.css";
import { useTranslation} from 'react-i18next';
export default function WhatIs() {
  const { t ,i18n} = useTranslation();
  return <>
  <Element name="whatis" dir={i18n.language==='ar'?'rtl':'ltr'}>
  <motion.section className={`${styles.whatis} bg-black py-32`}>
      <div className='container m-auto px-10'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 sm:col-span-6 md:col-span-6'>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp'>
              <p className='text-sm uppercase font-normal text-red-700 -translate-y-10'>{t('whatis.what')}</p>
              <h3 className='text-5xl text-white -translate-y-6'>{t('whatis.firstCaption')} <span className='text-red-700'>{t('whatis.secondCaption')}</span></h3>
            </AnimationOnScroll>
          </div>
          <div className='col-span-12 sm:col-span-6 md:col-span-6'>
            <Parallax>
              <p>{t('whatis.desc')}</p>
            </Parallax>
          </div>

        </div>
        <Parallax rotateX={[100, -90]} >
          <img loading="lazy" src={MediaBox} alt="MediaBox" className='mx-auto w-4/5'/>
        </Parallax>
        <div className='col-span-12'>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp'>
            <h2 className='text-white'>{t('whatis.firstFooter')}</h2>
            <p className='text-zinc-400'>{t('whatis.secondFooter')}</p>
          </AnimationOnScroll>
        </div>

      </div>
    </motion.section>
  </Element>

  </>
}
