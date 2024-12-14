import { Link } from "react-router-dom";

const links = [
    {id:1, url:'/', text:'home'},
    {id:2, url:'about', text:'about'},
    {id:3, url:'courses', text:'courses'},
    {id:4, url:'/', text:'online courses'},
    {id:5, url:'CSR', text:'csr'},
    {id:6, url:'partner with us', text:'partner with us'},
    {id:7, url:'cart', text:'cart'},
    {id:8, url:'blog', text:'blog'},
    {id:9, url:'career', text:'career'},
    {id:10, url:'become partner', text:'become partner'},
    {id:11, url:'contactUs', text:'contactUs'}
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
