//  import { NavLink, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//  import HeroSection  from "../components/HeroSection";
  import Services from "./Services";
  import HomePage from './HomePage';
 import {WhoWeAre, CustomizedProjectReport, DetailedProjectReport, Scroller }  from "../components";

// import { NavLinks } from "../components";
// import HeroCarousel from "../components/HeroCarousel";
import Nav from "../components/Nav";
import HeadHeroSection from "../components/HeadHeroSection";
import CmLogoSection from "../components/CmLogoSection";

const HomeLayout = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <section className=" py-5"><Outlet/></section>
    
      <Footer/>
    </>
  )
}

export default HomeLayout;
