/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenu, NavbarMenuItem, useDisclosure, Modal, NavbarMenuToggle, Progress, useSwitch, VisuallyHidden } from "@nextui-org/react";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function NavbarComponent() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "World map", url: "https://www.lyconet.com/ie/mediabox" },
    { name: "what is @ahmed", url: "#whatis" },
    { name: "how it works", url: "#" },
    { name: "customizable", url: "#" },
    { name: "business information", url: "#" },
    { name: "video", url: "#" },
  ];



  return <>
        
    <Navbar
      maxWidth="xl"
      height="5rem"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-black backdrop-filter-none backdrop-blur-none transition-background duration-1000 animate__animated animate__slideInDown animate__delay-2s`}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-2xl"><span className='text-red-700'>@ </span>ahmed</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarItem><Link color="foreground" href="https://www.lyconet.com/ie/mediabox">World map</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#whatis">what is @ahmed</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#howitworks">how it works</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#customizable">customizable</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#business">business information</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#video">video</Link></NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.url}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  </>
}

