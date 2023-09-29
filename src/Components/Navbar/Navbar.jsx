/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenu, NavbarMenuItem, useDisclosure, Modal, NavbarMenuToggle, Progress, useSwitch, VisuallyHidden } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

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
      className={`${!navScrollMode?'bg-transparent backdrop-filter-none backdrop-blur-none':'bg-inherit backdrop-filter'}  transition-background duration-1000`}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent justify="start">
        <NavbarBrand>
          @ahmed
        </NavbarBrand>
      </NavbarContent> 
      <NavbarContent className="items-center" justify="end">

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

