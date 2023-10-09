/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Main() {
  let { isVideoLoaded } = useSelector(state => state.system)
  return <>
    <Navbar />
      <Outlet />
    <div className={!isVideoLoaded&& 'w-full h-screen bg-black fixed top-0'}/>
  </>
}