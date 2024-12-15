 import { Link } from "react-router-dom"
 import { BsCart3 } from 'react-icons/bs';
  // import {BsMoonFill, BsSunFill} from 'react-icons/bs';
 import { NavLink } from 'react-router-dom';
 import { useState } from 'react';

//  import { FaBarsStaggered } from 'react-icons/fa6';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';



const themes = {
  winter: 'winter',
  dracula: 'dracula'
}

const getThemeFromLocalStorage = ()=>{
  return localStorage.getItem('theme') || themes.winter;
};

const Header = () => {
  // const [theme, setTheme] = useState(getThemeFromLocalStorage());
  //   const handleTheme = () =>{
  //       const {winter, dracula} = themes;
  //       const newTheme = theme === winter ? winter : winter;
  //       // document.documentElement.setAttribute('data-theme', theme);
  //       setTheme(newTheme);
  //   }

  //   useEffect(()=>{
  //     document.documentElement.setAttribute('data-theme', theme);
  //     localStorage.setItem('theme', theme);
  // },[theme]);   
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=' bg-neutral py-2 text-neutral-content'>
      {/* <div>
               
                <div className="flex space-x-4 text-2xl">
                  <a href="https://www.facebook.com/sscareskillsacademynoida" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
                  <a href="https://x.com/careskillsnoida?s=11&t=sOFQ7RqFa8PA7UJcCwwIQA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
                  <a href="https://www.instagram.com/sscareskillsacademy/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/company/sscareskillsacademy/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
                  <a href="https://www.youtube.com/@sscareskillsacademy/videos" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube /></a>
                </div>
                </div> */}
      
        <div className = "align-element flex justify-center sm:justify-end ">
         <div className='navbar-start'>
                {/* Title */}
                {/* <NavLink to='/' className='hidden lg:flex btn btn-primary rounded-s text-3xl items-center'>
                    <img className='h-12' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyOO3HORUXX7JHzMtf1jhEIEvvLSx2sJdEQ&s"} alt='logo'/>
                </NavLink> */}
                {/* DROPDOWN */}
                {/* <div className='dropdown'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                    <FaBarsStaggered className='h-6 w-6' />
                    </label>
                    <ul tabIndex={0}
                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
                        <NavLinks/>
                    </ul>
                </div> */}
                </div> 

        <div className = 'flex gap-x-6 justify-around items-center'>
          {/* <Link to='/login' className='link link-hover text-xs sm:text-sm'>
          Login
          </Link>
          {/* <span className="-ml-4 -mr">/</span> */}
          {/* <Link to='/register' className='link link-hover text-xs sm:text-sm'>
          SignIn 
          </Link>  */}

<div className="flex space-x-4">
  <Link
    to="/login"
    className="link no-underline text-xs sm:text-sm px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
  >
    Login
  </Link>
  <Link
    to="/register"
    className="link no-underline text-xs sm:text-sm px-5 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-300"
  >
    SignIn
  </Link>
</div>


          
            <div className='navbar-end -mr-10'>
                    <label className='swap swap-rotate'>
                        {/* this hidden checkbox controls the state */}
                        {/* <input type='checkbox' onChange={handleTheme} /> */}
                        {/* sun icon */}
                        {/* <BsSunFill className='swap-on h-4 w-4'/> */}
                        {/* moon icon */}
                        {/* <BsMoonFill className='swap-off h-4 w-4'/> */}
                    </label>
                </div>   

          <div className='navbar-center align-element lg:flex '>
                   {/* Theme Icons */}
                   {/* Cart Link */}
                   <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                    <div className='indicator '>
                    <BsCart3 className='h-6 w-6 '/>
                    <span className='badge badge-sm badge-primary indicator-item'>
                        0
                    </span>
                    </div>
                   </NavLink>
                </div>
        </div>
          
        </div>
    </header>
  )
}

export default Header;
