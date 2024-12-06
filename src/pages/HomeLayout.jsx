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

const HomeLayout = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <HeadHeroSection/>
    <section className="align-element py-20"><Outlet/></section>
    
    {/* <NavLinks/> */}
    {/* <NavLink/> */}
   
    {/* <HeroSection/> */}
    <Services/>
    <HomePage/>
    <WhoWeAre/>

    <CustomizedProjectReport/>
    <DetailedProjectReport/>
    {/* <Scroller/> */}
    
      <Footer/>
    </>
  )
}

export default HomeLayout;
