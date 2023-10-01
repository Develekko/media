/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import "./Home.css";
import BoxShot from '../../assets/images/Box_Shot_04.png'
import DotBig from '../../assets/images/dot-big.png'
import DotSmall from '../../assets/images/dot-small.png'
import MediaBox from '../../assets/images/MediaBox_Rot_01_00015.png'
import { Image , Tabs , Tab} from '@nextui-org/react';
import { motion, useTransform, useScroll } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { HowToWorkItems } from './HowToWork.jsx';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const HeroOpacitySection = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [selected, setSelected] = React.useState("Plug and play");
  return <>
    <motion.section
      style={{ opacity: HeroOpacitySection }} id='hero' className='flex fixed flex-col justify-start w-full text-center h-screen gap-5 -z-10 pt-5 min-h-screen '>

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
          poster="anyimage.jpg" className="loaded" >
          <source src="https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696098491/01_WEBSITE_INTRO_r2fzqf.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-center -z-10">
        <Image loading="lazy" src={BoxShot} alt="MediaBox" className='w-2/3 mx-auto' classNames={{ wrapper: "mx-auto" }} />
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


    <section id="howitworks" style={{ backgroundColor: '#F4F4F4' }} className='py-36 text-black'>
      <div className='container m-auto px-10 text-center'>
        <p className="uppercase text-red-600 text-sm tracking-wider mb-3">How it works</p>
        <h2 className='text-5xl font-medium'>Connect, watch & get paid</h2>

        <div className="flex w-full flex-col mt-5">
      <Tabs 
        aria-label="howitworksTabs"    
        variant='underlined'
        color='default'
        className='mx-auto text-black'
        classNames={{
          base:'text-black',
          cursor: "w-full bg-[#000]",
          tabContent: "group-data-[selected=true]:text-[#000]"
          }}     
        selectedKey={selected}
        onClick={(e)=>{setSelected((e.target.outerText))}}
        onSelectionChange={setSelected}
      >
      {HowToWorkItems.map((item) => {
          return (
            <Tab key={item.label} title={item.label}>
            <div className='grid grid-cols-12 py-10 relative'>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 text-left flex flex-col justify-center">
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut='animate__fadeOutLeft'>
                        <h4 className='text-2xl font-medium text-black'>{item.heading}</h4>
                        <p className='md:w-2/3 text-base text-zinc-400 my-5'>{item.desc}</p>
                    </AnimationOnScroll>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6">
                    <AnimationOnScroll animateIn="animate__fadeInRight" animateOut='animate__fadeOutRight'>
                        <video width="100%" height="auto" muted loop autoPlay playsInline preload='none'
                            poster="anyimage.jpg" className="bg-black">
                            <source data-src={item.url} type="video/mp4" src={item.url} />
                        </video>
                       {item.label!=='Plug and play'&& <div class="howitworks__video__image absolute w-full">
                        <div className="relative howitworks__video__image">
                            <img loading="lazy" className="mx-auto" width={280} src="https://atmedia.digital/wp-content/themes/mediaworld/assets/images/Box_Shot_03-small.png" alt="@ ahmed box - TV Entertainment and Advertising" />
                        </div>
                    </div>}
                    </AnimationOnScroll>
                </div>
                <div className="absolute w-full top-0 h-full"></div>
            </div>
            </Tab>
          );
        })}
      </Tabs>
    </div>  

        {/* <ConfigProvider
          theme={{
            token: {
              colorPrimary: 'rgb(51, 51, 51)',
              fontFamily: `'Roboto', sans-serif!important`,
            },
            components: {
              Tabs: {
                "inkBarColor": "#000",
                "itemColor":"rgb(51, 51, 51)"
              },
            },
          }}
        >
          <Tabs
            className='max-w-max mx-auto mt-10'
            style={{
          backgroundColor: '#09c',
        }}
            defaultActiveKey="1"
            items={HowToWorkItems}
            centered
            size='large'
          />
        </ConfigProvider>
 */}

      </div>
    </section>







   



    <p className='bg-black hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, soluta. Itaque minima iste velit, quos est, delectus pariatur quo libero culpa enim t accusantium quam inventore voluptatum totam iusto error porro placeat eum nihil, dolores aliquid nemo itaque ullam officiis earum odio perspiciatis et aperiam! Et officia sint temporibus neque, vitae quae nihil nulla autem ab commodi nostrum tempore natus dolore vero corrupti laudantium nam aperiam suscipit delectus. A possimus totam dicta quia molestias sed quas asperiores vero quam, impedit autem omnis officiis dolor eius similique tempore placeat iste in, excepturi voluptates perspiciatis odio voluptate. Officiis nobis a voluptatum sequi aperiam, laudantium fugiat eum ut ducimus? Saepe ratione vitae maxime reprehenderit facilis sequi ab nostrum harum pariatur eaque. Eos numquam voluptas reprehenderit, vitae doloribus necessitatibus aspernatur dolores pariatur voluptatem earum facilis? Ex atque consectetur quidem! Autem aliquam ratione aut laboriosam perferendis, expedita quod cumque, dolorem et modi architecto distinctio eum alias quis officia maxime quaerat quam corporis facere? Officia, suscipit? Doloribus ullam quisquam tenetur quam ducimus unde tempora, exercitationem, aperiam rem libero, saepe ipsam reiciendis aliquid voluptatibus possimus? Ducimus, tempora provident, ipsum itaque deserunt dolor autem eaque iste rem ipsa nisi. Optio eius doloremque, numquam vero distinctio minima. Excepturi vitae nobis magni, ad rem maxime et, atque odit consequatur, obcaecati reiciendis aut exercitationem. Voluptatem possimus saepe blanditiis illo unde quam vitae? Debitis in repudiandae maxime at harum tempore atque? Nemo ratione itaque laborum reiciendis voluptatum sapiente, repellat quis quia fugit, error dolore! Dolore quo obcaecati expedita. Temporibus, tempore eligendi? Ex inventore modi, tenetur explicabo assumenda numquam laudantium molestias dolores architecto soluta! Aut suscipit nesciunt itaque deleniti tenetur similique enim aspernatur? Beatae mollitia, fugiat provident repellendus consequatur ullam, earum, aut atque quis error vitae incidunt placeat iure alias minus? Voluptatem modi delectus assumenda reiciendis, laborum temporibus itaque aliquid aperiam esse voluptates minus officiis debitis harum nihil numquam non consequatur voluptate cumque odit et repellat quos ad, inventore cupiditate. Repellat iusto doloremque obcaecati ducimus. Molestias aperiam praesentium minus excepturi officia unde sapiente soluta deleniti non necessitatibus ipsum, ut facilis perspiciatis debitis nisi recusandae vitae, itaque impedit.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit illo nihil nostrum, ullam similique officia praesentium aspernatur blanditiis eos! Voluptate error, numquam molestiae rem velit sunt est consequuntur aspernatur culpa nam id? Necessitatibus, iure? Dolores, natus nostrum. Dolor cupiditate sunt quisquam qui! Voluptatum dolorum doloribus tempora at excepturi quae quidem dolore, libero voluptates architecto blanditiis laudantium, fuga perspiciatis expedita sapiente eos numquam distinctio non et dignissimos! Voluptates recusandae aliquid aspernatur, velit neque sit eos cupiditate dolorum facilis nemo provident ex molestias at hic illum repellendus eius amet quia odit quidem. Aperiam vero dolorum repellendus sit voluptatem mollitia, asperiores sequi voluptatum eaque, est odio recusandae fuga laboriosam esse voluptate maiores eligendi, aliquam qui impedit vitae harum? Consequuntur rem dicta excepturi dolor dolore neque nisi, possimus animi, aut magni suscipit omnis. A sequi earum voluptas ducimus nulla quasi officiis nam inventore eaque, tempora pariatur enim ea provident dolore dignissimos esse ab, illo, dolorum quia iusto minima sapiente consectetur? Recusandae rem magnam expedita repellat necessitatibus deserunt, vero distinctio sequi quod, velit adipisci a sapiente voluptatibus ipsa consequuntur magni autem! Sint deserunt id architecto minus! Voluptate dolorem sequi nesciunt distinctio? Ex doloribus consequatur magni pariatur cumque aliquid debitis maxime, ea qui nam quidem?</p>
  </>
}