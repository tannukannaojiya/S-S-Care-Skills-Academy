import React from 'react';
import Hero from '../components/Hero';

export const loader = async () =>{
const response = await customFetch(url);
console.log(response);
const products = response.data.data;
return {products};
  
}
const Landing = () => {
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default Landing;
