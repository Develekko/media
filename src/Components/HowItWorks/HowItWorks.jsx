import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './HowItWorks.module.css'
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
    const [selected, setSelected] = React.useState("Plug and play");
    const { t } = useTranslation();
    const HowToWorkItems = [
        {
            label: t('howitworks.firstTab.label'),
            heading: t('howitworks.firstTab.heading'),
            desc: t('howitworks.firstTab.desc'),
            url: "https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696189323/02_a_WEBSITE_LOOP_CONNECT_jjlgau.mp4",
        },
        {
            label: t('howitworks.secondTab.label'),
            heading: t('howitworks.secondTab.heading'),
            desc: t('howitworks.secondTab.desc'),
            url: "https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696189696/02_b_WEBSITE_LOOP_PROVIDER_glyuf8.mp4",
        },
        {
            label: t('howitworks.thirdTab.label'),
            heading: t('howitworks.thirdTab.heading'),
            desc: t('howitworks.thirdTab.desc'),
            url: "https://res.cloudinary.com/dhlpnm4rn/video/upload/v1696189818/02_c_WEBSITE_LOOP_EARN_jipnx3.mp4",
        },
    ];

    return <>
        <Element name="howitworks">
            <section className={`${styles.howitworks} py-36 text-black`}>
                <div className='container m-auto  px-0 sm:px-10 text-center'>
                    <p className="uppercase text-red-600 text-sm tracking-wider mb-3">{t('howitworks.firstHeader')}</p>
                    <h2 className='text-2xl sm:text-5xl font-medium'>{t('howitworks.secondHeader')}</h2>

                    <div className="flex w-full flex-col mt-5">
                        <Tabs
                            aria-label="howitworksTabs"
                            variant='underlined'
                            color='default'
                            className='mx-auto text-black'
                            classNames={{
                                base: 'text-black',
                                cursor: "w-full bg-[#000]",
                                tabContent: "group-data-[selected=true]:text-[#000]"
                            }}
                            selectedKey={selected}
                            onClick={(e) => { setSelected((e.target.outerText)) }}
                            onSelectionChange={setSelected}
                        >
                            {HowToWorkItems.map((item) => {
                                return (
                                    <Tab key={item.label} title={item.label}>
                                        <div className='grid grid-cols-12 py-10 px-5 relative howitworks_section'>
                                            <div className="col-span-12 sm:col-span-6 md:col-span-6 text-left flex flex-col justify-center">
                                                <AnimationOnScroll duration="0.7" animateIn="animate__fadeInLeft" animateOut='animate__fadeOutLeft'>
                                                    <h4 className='text-2xl font-medium text-black'>{item.heading}</h4>
                                                    <p className='md:w-2/3 text-base text-zinc-400 my-5'>{item.desc}</p>
                                                </AnimationOnScroll>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6 md:col-span-6">
                                                <AnimationOnScroll duration="0.7" animateIn="animate__fadeInRight" animateOut='animate__fadeOutRight'>
                                                    <video width="100%" height="auto" muted loop autoPlay playsInline
                                                        poster="anyimage.jpg" className={styles.howitworks_video}>
                                                        <source data-src={item.url} type="video/mp4" src={item.url} />
                                                    </video>
                                                    {item.label !== 'Plug and play' && <div className="absolute w-full">
                                                        <div className={`${styles.howitworks__video__image} relative`}>
                                                            <img loading="lazy" className="mx-auto" width={280} src="https://atmedia.digital/wp-content/themes/mediaworld/assets/images/Box_Shot_03-small.png" alt="@ media box - TV Entertainment and Advertising" />
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
                </div>
            </section>
        </Element>

    </>
}
