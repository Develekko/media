/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Navbar.module.css'
import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import i18n from 'i18next';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ChevronDown } from '../../utlis/icons.jsx';
import { useTranslation } from 'react-i18next';


export default function NavbarComponent() {
  const { t,i18n } = useTranslation();
  const menuItems = [
  { name: t('navbar.navbarItem_2'), url: "whatis" },
  { name: t('navbar.navbarItem_3'), url: "howitworks" },
  { name: t('navbar.navbarItem_4'), url: "customizable" },
  { name: t('navbar.navbarItem_5'), url: "business" },
  { name: t('navbar.navbarItem_6'), url: "video" },
];
const languages = [
  { key: 'en', name: 'EN', flag: "https://flagcdn.com/gb.svg" },
  { key: 'ar', name: 'AR', flag: "https://flagcdn.com/eg.svg" },
  { key: 'de', name: 'DE', flag: "https://flagcdn.com/de.svg" },
]
  let { isVideoLoaded } = useSelector(state => state.system)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(localStorage.getItem('language'));
  const currentLanguage = languages.find(lang => lang.key === selectedLanguage)

  const HandelLanguageSelect = (e) => {
    setSelectedLanguage(e)
    i18n.changeLanguage(e)
  }
  return <>

    <Navbar
      maxWidth="xl"
      height="5rem"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-black backdrop-filter-none backdrop-blur-none transition-background duration-1000 opacity-0 ${isVideoLoaded && 'animate__animated animate__slideInDown animate__delay-1s opacity-100'} `}
    >
      <NavbarContent>
        <NavbarBrand>
        <Link to="hero" smooth={true} duration={500} offset={-50}><p className="font-bold text-2xl tracking-wide"><span className="text-red-700">@ </span>med<span className="relative before:absolute before:content-[''] before:bg-red-700 before:top-[2.5px] before:translate-x-[-50%] before:left-[50%] before:w-[6px] before:h-[6px]  before:rounded-full">i</span>a</p></Link>        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-8" justify="end"  dir={i18n.language==='ar'?'rtl':'ltr'}>
      <NavbarItem><Link to="" className="hover:text-red-700 transition-colors" href="https://www.lyconet.com/ie/mediabox">{t('navbar.navbarItem_1')}</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="whatis" smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>{t('navbar.navbarItem_2')}</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="howitworks" smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>{t('navbar.navbarItem_3')}</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="customizable" smooth={true} duration={500} spy={true} isDynamic={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>{t('navbar.navbarItem_4')}</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="business" smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>{t('navbar.navbarItem_5')}</Link></NavbarItem>
        <NavbarItem className='relative'><Link to="video" smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium`} className={`${styles.navbar_link} cursor-pointer hover:text-red-700 transition-colors`}>{t('navbar.navbarItem_6')}</Link></NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex" justify="end">
        <Dropdown className="w-fit max-w-fit min-w-fit rounded-md" size='lg'>
          <DropdownTrigger>
            <Button
              variant="light"
              endContent={<ChevronDown className=" font-bold text-white"/>}
              size="lg"
              className="rounded-md"
            >
              <div className="flex gap-3">
                <Avatar alt={currentLanguage.key} className="w-8 h-6 rounded-md" src={currentLanguage.flag} />
                <span>{currentLanguage.name}</span>
              </div>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="change Language"
            onAction={HandelLanguageSelect}
            className="w-fit p-2"
          >
            {languages.map(item => <DropdownItem startContent={<Avatar alt={item.name} className="w-7 h-6 rounded-md" src={item.flag} />} key={item.key}>{item.name}</DropdownItem>)}
          </DropdownMenu>
        </Dropdown>
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
        <NavbarMenuItem key="World map"><Link to="#" className="w-full" color="foreground" href="https://www.lyconet.com/ie/mediabox" size="lg">{t('navbar.navbarItem_1')}</Link></NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.url} smooth={true} duration={500} spy={true} activeClass={`${styles.active} text-red-600 font-medium transition-colors`} className={`${styles.navbar_link} cursor-pointer w-full relative`} onClick={() => { setIsMenuOpen(false) }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  </>
}

