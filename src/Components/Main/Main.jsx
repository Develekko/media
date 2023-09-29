/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import {Outlet} from 'react-router-dom'

export default function Main() {

  return <>
  <Navbar />
  <Outlet/>
  </>
}