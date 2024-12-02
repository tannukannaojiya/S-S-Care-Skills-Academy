import { NavLink } from "react-router-dom";

const links = [
    {id:1, url:'/', text:'home'},
    {id:2, url:'about', text:'about'},
    {id:3, url:'services', text:'services'},
    {id:4, url:'courses', text:'courses'},
    {id:4, url:'online courses', text:'online courses'},
    {id:5, url:'csr', text:'csr'},
    {id:5, url:'partner with us', text:'partner with us'},
    {id:5, url:'cart', text:'cart'},
    {id:6, url:'blog', text:'blog'},
    {id:6, url:'career', text:'career'},
    {id:7, url:'become partner', text:'become partner'},
    {id:8, url:'contactUs', text:'contactUs'}
]

const NavLinks = () => {
  return (
    <>
    {
        links.map((link)=>{
            const {id, url, text} = link;
            return(
                <li key={id}>
                    <NavLink className='capitalize' to={url}>{text}</NavLink>
                </li>
            )
        })
    }
      
    </>
  )
}

export default NavLinks;
