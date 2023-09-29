/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenu, NavbarMenuItem, useDisclosure, Modal, NavbarMenuToggle, Progress, useSwitch, VisuallyHidden } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { ElafLogo, MoonIcon, SearchIcon, SunIcon } from '../../utlis/icons/Icons.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../Redux/api/Auth.api.js';
import { toast } from 'react-toastify';
import { reset } from '../../Redux/slice/Auth.slice.js';
import Dashboard from '../Dashboard/Dashboard.jsx';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import moment from 'moment';
export default function NavbarComponent() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const dispatch = useDispatch()
  const menuItems = [
    // "Profile",
    // "Dashboard",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
    // "Log Out",
  ];
  const navigate = useNavigate()
  let { isLoading, userData,message,flag } = useSelector(state => state.auth)
  let { drawerNav } = useSelector(state => state.user)
  let { isLoading: accessoryIsLoading } = useSelector(state => state.accessory)
  const {Component,slots, getBaseProps, getInputProps, getWrapperProps} = useSwitch();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [Time, setTime] = useState(moment().format('LTS'));
  const [navScrollMode, setnavScrollMode] = useState(false)
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen); // Toggle the fullscreen state
  };


  useEffect(() => {

    if(flag)
    {
      dispatch(reset())
    }
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setnavScrollMode(true)
      } else {
        setnavScrollMode(false)
      }
    };
    const intervalId = setInterval(() => {
      setTime(moment().format('LTS'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isLoading, userData,message,dispatch,flag,navScrollMode,drawerNav])
  return <>
    <Progress
      size="sm"
      isIndeterminate={isLoading||accessoryIsLoading}
      aria-label="Loading..."
      className="w-full bg-transparent hideOnPrint"
    />

    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    //style={{ width: drawerNav ? '100%' : '30%', marginLeft: drawerNav ? 'auto' : 'unset' }}
      className={`hideOnPrint ${!navScrollMode?'bg-transparent backdrop-filter-none backdrop-blur-none':'bg-inherit backdrop-filter'}  transition-background duration-1000`}
      classNames={
        {"wrapper":!drawerNav?'w-full max-w-full ms-auto duration-200':'w-[86%] max-w-[86%] ms-auto duration-200'}
      }
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className=" gap-4" justify="start">
       <div className='translate-x-20'>
       <h1 className="text-lg font-bold">{Time}</h1>
       </div>
      </NavbarContent>
      <NavbarContent className="hidden" justify="end">
        <NavbarBrand>
          <ElafLogo />
        </NavbarBrand>
      </NavbarContent> 
      <NavbarContent className="items-center" justify="end">
        {userData&&<Input
          classNames={{
            base: "w-48 sm:w-1/2",
            input: "text-small",
            inputWrapper: "font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />}

        <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} onChange={toggleFullscreen} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isFullscreen ?<FullscreenExitIcon/>:<FullscreenIcon/>}
          </div>
      </Component>
        <Switch
          onValueChange={() => { setTheme(theme === 'light' ? 'dark' : 'light') }}
          isSelected={theme === 'dark' ? true : false}
          size="md"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonIcon className={className} />
            ) : (
              <SunIcon className={className} />
            )
          }
        >
        </Switch>
        <Dropdown placement="bottom">
          <NavbarItem>
            <DropdownTrigger>
              <Avatar
                isBordered
                className="transition-transform cursor-pointer"
                color="primary"
                size="sm"
                src={userData ? userData.image : ""}
                icon={!userData ? <i className="fa-solid fa-circle-user fa-2xl"></i> : ""}
              />
            </DropdownTrigger>
          </NavbarItem>
          {userData ?
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem color="primary" key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold ">{userData.name}</p>
              </DropdownItem>
              <DropdownItem onPress={() => { navigate('/profile') }} key="Profile">Profile</DropdownItem>
              <DropdownItem onPress={() => { navigate('/user') }} key="Users">Users</DropdownItem>
              {/* 
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem> */}
              <DropdownItem onPress={()=>window.open(`${isMobile?'https://wa.me/201148134726':'https://web.whatsapp.com/send/?phone=201148134726'}`, '_blank')} key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem onPress={()=>{dispatch(logout(toast))}} key="logout" color="danger">Log Out</DropdownItem>
            </DropdownMenu> :
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem onPress={() => { navigate('/login') }} startContent={<i className="fa-solid fa-right-to-bracket"></i>} key="Signin" color="primary" className='text-center'>سجل الدخول </DropdownItem>
            </DropdownMenu>
          }
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    <Dashboard/>
  </>
}

