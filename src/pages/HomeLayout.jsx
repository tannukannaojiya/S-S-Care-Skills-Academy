import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection  from "../components/HeroSection";

const HomeLayout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <HeroSection/>
    <section className="align-element py-20"><Outlet/></section>
    
      <Footer/>
    </>
  )
}

export default HomeLayout;
