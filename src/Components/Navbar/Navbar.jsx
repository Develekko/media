/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenu, NavbarMenuItem, useDisclosure, Modal, NavbarMenuToggle, Progress, useSwitch, VisuallyHidden } from "@nextui-org/react";


export default function NavbarComponent() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {name:"World map",url:"#"},
    {name:"what is @ahmed",url:"#"},
    {name:"how it works",url:"#"},
    {name:"customizable",url:"#"},
    {name:"business information",url:"#"},
    {name:"video",url:"#"},
  ];



  return <>
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-transparent backdrop-filter-none backdrop-blur-none transition-background duration-1000`}
    >
      <NavbarContent>
       
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem><Link color="foreground" href="https://www.lyconet.com/ie/mediabox">World map</Link></NavbarItem>
        <NavbarItem><Link href="#whatis@ahmed" aria-current="page">what is @ahmed</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#howitworks">how it works</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#customizable">customizable</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#business">business information</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#video">video</Link></NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
   

      <NavbarMenu>
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

