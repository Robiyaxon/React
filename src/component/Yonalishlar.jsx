import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"
const Yonalishlar = () => {
  return (
    <div className='Hiro'> 
    <NavLink to="contact">Contact</NavLink>
    <NavLink to="qiziqish">Qiziqish</NavLink>
    <NavLink to="others">Others</NavLink>

    </div>
  )
}

export default Yonalishlar