/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import "./Home.css";
import BoxShot from '../../assets/images/Box_Shot_04.png'
import DotBig from '../../assets/images/dot-big.png'
import DotSmall from '../../assets/images/dot-small.png'
import MediaBox from '../../assets/images/MediaBox_Rot_01_00015.png'
import HeroIntroVideo from '../../assets/videos/01_WEBSITE_INTRO.mp4'
import { Image } from '@nextui-org/react';
import { motion, useTransform, useScroll } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import HowItWorks from '../HowItWorks/HowItWorks.jsx';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const HeroOpacitySection = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const [videoIntroLoaded, setVideoIntroLoaded] = React.useState(false);

  return <>
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
          poster="anyimage.jpg" className={videoIntroLoaded ? 'loaded' : 'opacity-0'}
          onLoadedData={() => setVideoIntroLoaded(true)} >
          {/* <source src="https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696098491/01_WEBSITE_INTRO_r2fzqf.mp4" type="video/mp4" /> */}
          <source src={HeroIntroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="text-center -z-10">
        <img loading="lazy" src={BoxShot} alt="MediaBox" className='w-2/3 mx-auto' />
      </div>
    </motion.section>
    <div className="overlay w-full hero-shadow"></div>




    <motion.section id='whatis' className='bg-black py-32'>
      <div className='container m-auto px-10'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 sm:col-span-6 md:col-span-6'>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp'>
              <p className='text-sm uppercase font-normal text-red-700 -translate-y-10'>What is @ahmed</p>
              <h3 className='text-5xl text-white -translate-y-6'>All in <span className='text-red-700'>one box</span></h3>
            </AnimationOnScroll>
          </div>
          <div className='col-span-12 sm:col-span-6 md:col-span-6'>
            <Parallax>
              <p>@media box is the first multi-media TV box designed for home entertainment where you can watch TV, films or TV shows from your favourite streaming providers and get paid. Thanks to our myWorld partnership you will get a commission in form of Cashback and additional benefits for every ad you see.</p>
            </Parallax>
          </div>

        </div>
        <Parallax rotateX={[100, -90]} >
          <Image loading="lazy" src={MediaBox} alt="MediaBox" className='mx-auto w-4/5' classNames={{ wrapper: "mx-auto" }} />
        </Parallax>
        <div className='col-span-12'>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp'>
            <h2 className='text-white'>About myWorld International</h2>
            <p className='text-zinc-400'>The London-based myWorld International group operates the worldwide myWorld Benefit Program, which offers a wealth of attractive benefits for shoppers, retailers and service providers alike. Shoppers can enjoy Shopping Points and Cashback with every purchase from myWorld partners regardless of whether they shop online or in-store. In turn, partners benefit from efficient customer loyalty programmes, which help them increase their visibility and sales. More than 15 million customers and 150,000 partners in 55 markets already use the myWorld Benefit Program. More information on myworld.com.</p>
          </AnimationOnScroll>
        </div>

      </div>
    </motion.section>


    <HowItWorks/>


    <motion.section id="buy" style={{ backgroundColor: '#F4F4F4' }}>
      <div className='container m-auto py-20 px-0 sm:px-10 text-center'>
        <motion.div className="buy__video text-center">
          <div className="relative text-center md:w-2/3 mx-auto md:px-10 w-5/6 max-w-max">
            <Parallax scale={[1.5, 1]} opacity={[0.7, 1]}>
              <video width="100%" height="auto" muted loop autoPlay playsInline>
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

            
    <motion.section id="customizable" style={{ backgroundColor: '#fff' }}>
      <div className='container m-auto py-20 px-5 md:px-32 text-center'>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 text-left z-0">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutDown'>
              <p className="uppercase text-zinc-400 text-sm mb-5">CUSTOMIZABLE</p>
              <h2 className="text-black text-3xl md:text-5xl">You can set up all ads completely according to your wishes.</h2>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-8 z-10">
            <video width="100%" height="auto" muted loop autoPlay playsInline className="my-10">
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
                bulletClass:"opacity-100 swiper-pagination-bullet w-4 h-4 rounded-lg",
              }}
              modules={[EffectFade, Keyboard, Pagination]}
              className="mySwiper"
            >
              {[...Array(3)].map((_,index) => {
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






    <p className='bg-black hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, soluta. Itaque minima iste velit, quos est, delectus pariatur quo libero culpa enim t accusantium quam inventore voluptatum totam iusto error porro placeat eum nihil, dolores aliquid nemo itaque ullam officiis earum odio perspiciatis et aperiam! Et officia sint temporibus neque, vitae quae nihil nulla autem ab commodi nostrum tempore natus dolore vero corrupti laudantium nam aperiam suscipit delectus. A possimus totam dicta quia molestias sed quas asperiores vero quam, impedit autem omnis officiis dolor eius similique tempore placeat iste in, excepturi voluptates perspiciatis odio voluptate. Officiis nobis a voluptatum sequi aperiam, laudantium fugiat eum ut ducimus? Saepe ratione vitae maxime reprehenderit facilis sequi ab nostrum harum pariatur eaque. Eos numquam voluptas reprehenderit, vitae doloribus necessitatibus aspernatur dolores pariatur voluptatem earum facilis? Ex atque consectetur quidem! Autem aliquam ratione aut laboriosam perferendis, expedita quod cumque, dolorem et modi architecto distinctio eum alias quis officia maxime quaerat quam corporis facere? Officia, suscipit? Doloribus ullam quisquam tenetur quam ducimus unde tempora, exercitationem, aperiam rem libero, saepe ipsam reiciendis aliquid voluptatibus possimus? Ducimus, tempora provident, ipsum itaque deserunt dolor autem eaque iste rem ipsa nisi. Optio eius doloremque, numquam vero distinctio minima. Excepturi vitae nobis magni, ad rem maxime et, atque odit consequatur, obcaecati reiciendis aut exercitationem. Voluptatem possimus saepe blanditiis illo unde quam vitae? Debitis in repudiandae maxime at harum tempore atque? Nemo ratione itaque laborum reiciendis voluptatum sapiente, repellat quis quia fugit, error dolore! Dolore quo obcaecati expedita. Temporibus, tempore eligendi? Ex inventore modi, tenetur explicabo assumenda numquam laudantium molestias dolores architecto soluta! Aut suscipit nesciunt itaque deleniti tenetur similique enim aspernatur? Beatae mollitia, fugiat provident repellendus consequatur ullam, earum, aut atque quis error vitae incidunt placeat iure alias minus? Voluptatem modi delectus assumenda reiciendis, laborum temporibus itaque aliquid aperiam esse voluptates minus officiis debitis harum nihil numquam non consequatur voluptate cumque odit et repellat quos ad, inventore cupiditate. Repellat iusto doloremque obcaecati ducimus. Molestias aperiam praesentium minus excepturi officia unde sapiente soluta deleniti non necessitatibus ipsum, ut facilis perspiciatis debitis nisi recusandae vitae, itaque impedit.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit illo nihil nostrum, ullam similique officia praesentium aspernatur blanditiis eos! Voluptate error, numquam molestiae rem velit sunt est consequuntur aspernatur culpa nam id? Necessitatibus, iure? Dolores, natus nostrum. Dolor cupiditate sunt quisquam qui! Voluptatum dolorum doloribus tempora at excepturi quae quidem dolore, libero voluptates architecto blanditiis laudantium, fuga perspiciatis expedita sapiente eos numquam distinctio non et dignissimos! Voluptates recusandae aliquid aspernatur, velit neque sit eos cupiditate dolorum facilis nemo provident ex molestias at hic illum repellendus eius amet quia odit quidem. Aperiam vero dolorum repellendus sit voluptatem mollitia, asperiores sequi voluptatum eaque, est odio recusandae fuga laboriosam esse voluptate maiores eligendi, aliquam qui impedit vitae harum? Consequuntur rem dicta excepturi dolor dolore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro assumenda adipisci dolore debitis natus excepturi pariatur id. Obcaecati in exercitationem repellat sed cumque distinctio optio minus soluta reprehenderit, animi, voluptas modi. Molestias consequuntur voluptate, incidunt eos, hic delectus modi quis explicabo laudantium aliquid, fugiat dolorum rem ipsam! Dolorem asperiores consequatur ea voluptas hic quaerat corrupti doloremque numquam, quibusdam quod. Ipsam minima ut, esse quia distinctio, animi, eum qui in ducimus sit officiis cupiditate provident veritatis quidem facilis repellendus voluptates vel. Numquam ducimus vero quia esse amet tenetur ipsam temporibus eum. Vero sapiente vitae deserunt accusantium asperiores, veniam quam, quas ipsum iste blanditiis veritatis quidem, ex minus aperiam. Ea suscipit commodi, quos laboriosam numquam ut neque dolore sapiente nobis eo</p>
  </>
}