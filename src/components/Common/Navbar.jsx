import React from 'react'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='shadow'>
        <div className="container mx-auto py-5">
        <div className="nav flex items-center justify-between">
            <img src={logo} alt="" />
            <div className="navlist flex  text-[20px] ml-[-500px] ">
                <ul className='flex space-x-14 text-webcolor'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/courses'}>Courses</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/pricing'}>Pricing</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <div className="text-[20px] space-x-10">
                    <button className='text-webcolor'><Link to={'/sign-up'}>Sign Up</Link></button>
                    <button className='bg-common text-white py-2 px-8 rounded-[10px]'><Link to={'/login'}>Login</Link></button>
                </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
