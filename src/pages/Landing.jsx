import React from 'react';
import { Element } from 'react-scroll';
import HeadHeroSection from '../components/HeadHeroSection';
import Services from './Services';
import HomePage from './HomePageCourses';
import { CustomizedProjectReport, WhoWeAre } from '../components';
import HeroSections from '../components/HeroSections';

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
      <Element name="services">
        <Services />
      </Element>
      {/* <Element name="courses">
        <HomePage/>
      </Element> */}
      <HomePage/>
      <WhoWeAre/>
      <CustomizedProjectReport/>
      <HeroSections/>
      
      
    </div>
  )
}

export default Landing;
