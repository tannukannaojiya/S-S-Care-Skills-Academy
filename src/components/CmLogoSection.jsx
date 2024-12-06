import React from 'react'
import CompanyLogo from '../assets/CompanyLogo.png';

const CmLogoSection = () => {
  return (
    <div className='flex justify-center bg-slate-100 py-5'>
        <img src={CompanyLogo} alt='logo'/>
      
    </div>
  )
}

export default CmLogoSection;
