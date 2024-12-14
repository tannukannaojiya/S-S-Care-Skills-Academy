import { Link } from "react-router-dom";

const links = [
    {id:1, url:'/', text:'home'},
    {id:2, url:'services', text:'services'},
    {id:3, url:'about', text:'about'},
    {id:4, url:'courses', text:'courses'},
    {id:5, url:'/', text:'online courses'},
    {id:6, url:'CSR', text:'csr'},
    {id:7, url:'partner with us', text:'partner with us'},
    {id:8, url:'cart', text:'cart'},
    {id:9, url:'blog', text:'blog'},
    {id:10, url:'career', text:'career'},
    {id:11, url:'become partner', text:'become partner'},
    {id:12, url:'contactUs', text:'contactUs'}
]

const NavLinks = () => {
  return (
    <>
    {
        links.map((link)=>{
            const {id, url, text} = link;
            return(
                <li key={id}>
                    <NavLinks className='capitalize' to={url}>{text}</NavLinks>
                </li>
            )
        })
    }
      
    </>
  )
}

export default NavLinks;
