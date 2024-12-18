import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbars from "../components/Navbars";

const HomeLayout = () => {
  return (
    <>
    <Navbars/>
    <section className=" py-5"><Outlet/></section>
    
      <Footer/>
    </>
  )
}

export default HomeLayout;
