import React from 'react'
import {  NavLink ,useNavigate} from 'react-router'
const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s" alt="react" />
    <ul>
       <NavLink to='/'><li>Home</li></NavLink> 
        <NavLink to='about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/product'><li>Product</li></NavLink>
    </ul>
    <button onClick={()=>{navigate('/contact',{replace:true})}}>Get Started</button>
   </div>
  )
}

export default NavBar