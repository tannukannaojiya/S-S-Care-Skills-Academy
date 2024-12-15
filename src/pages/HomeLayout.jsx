//  import { NavLink, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "./Services";
import HomePage from './HomePage';
import {WhoWeAre, CustomizedProjectReport, DetailedProjectReport, Scroller }  from "../components";
import Nav from "../components/Nav";
import HeadHeroSection from "../components/HeadHeroSection";
import CmLogoSection from "../components/CmLogoSection";
import Navbars from "../components/Navbars";

const HomeLayout = () => {
  return (
    <>
    {/* <Header/>
    <Nav/> */}
    <Navbars/>
    <section className=" py-5"><Outlet/></section>
    
      <Footer/>
    </>
  )
}

export default HomeLayout;
