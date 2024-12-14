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
