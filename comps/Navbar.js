import Link from 'next/link'
import React from 'react'
// import style from '../styles/About.module.css'
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>Adnan </div>
    
        <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/services'>Services</Link>
    </nav>
  )
}
export default Navbar
