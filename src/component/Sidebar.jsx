import React from 'react'
import logo from '../assets/movie.jpg'
import '../style/sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className='side'>
        <img src ={logo}  alt ='logo'/>

        <NavLink to={'/'} className='back'>Back</NavLink>
    </nav>
  )
}

export default Sidebar