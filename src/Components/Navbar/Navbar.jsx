/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Navbar.module.css'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';


export default function NavbarComponent() {
  let { isVideoLoaded } = useSelector(state => state.system)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { name: "what is @ahmed", url: "whatis" },
    { name: "how it works", url: "howitworks" },
    { name: "customizable", url: "customizable" },
    { name: "business information", url: "business" },
    { name: "video", url: "video" },
  ];



  return <>

    <Navbar
      maxWidth="xl"
      height="5rem"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-black backdrop-filter-none backdrop-blur-none transition-background duration-1000 opacity-0 ${isVideoLoaded&& 'animate__animated animate__slideInDown animate__delay-1s opacity-100'} `}
    >
      <NavbarContent>
        <NavbarBrand>
        <Link to="hero" smooth={true} duration={500} offset={-50}><p className="font-bold text-2xl cursor-pointer"><span className='text-red-700'>@ </span>ahmed</p></Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-8" justify="end">
        <NavbarItem><Link to="" className="hover:text-red-700 transition-colors" href="https://www.lyconet.com/ie/mediabox">World map</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="whatis" smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>what is @ahmed</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="howitworks" smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>how it works</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="customizable" smooth={true} duration={500} spy={true} isDynamic={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>customizable</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="business" smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>business information</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="video" smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>video</Link></NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>


      <NavbarMenu
        className="w-5/6 top-0 z-50"
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center my-3">Menu</p>
        <NavbarMenuItem key="World map"><Link to="#" className="w-full" color="foreground" href="https://www.lyconet.com/ie/mediabox" size="lg">World map</Link></NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.url} smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium transition-colors`} className={`${styles.navbar_link} cursor-pointer w-full relative`} onClick={()=>{setIsMenuOpen(false)}}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  </>
}

