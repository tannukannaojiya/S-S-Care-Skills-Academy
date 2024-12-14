import React from 'react';
import { Element } from 'react-scroll';
// import Hero from '../components/Hero';
import HeadHeroSection from '../components/HeadHeroSection';
import Services from './Services';
import Courses from './Courses';
import CoursesListCart from '../components/CoursesListCart';
import HomePage from './HomePage';
import { CustomizedProjectReport, WhoWeAre } from '../components';
import CmLogoSection from '../components/CmLogoSection';

export const loader = async () =>{
const response = await customFetch(url);
console.log(response);
const products = response.data.data;
return {products};
  
}
const Landing = () => {
  return (
    <div className='-mt-5'>
      <HeadHeroSection/>
      {/* <Services/>
      <HomePage/> */}
      <Element name="services">
        <Services />
      </Element>
      <Element name="courses">
        <HomePage />
      </Element>
      <WhoWeAre/>
      <CustomizedProjectReport/>
      <CmLogoSection/>
      
      
    </div>
  )
}

export default Landing;
