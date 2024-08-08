import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Topbar.css"

function Topbar() {
  return (
    <>
    <div className='topbar' >
        <div className="logo">
        <img src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo2MCwidyI6MTI1MCwiZnMiOjQ4LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UHJhbmF5IFNhbHVuayE=/madrigal.png
" alt="" />
        </div>
            <ul>
            <NavLink to="/">
                <li>Home</li>
                </NavLink>
            <NavLink to="/">
                <li>Skills</li>
                </NavLink>
                <NavLink to="/">
                <li>Work</li>
                </NavLink>
                <NavLink to="/About">
                  <li>Contact</li>
                  </NavLink>
                
            </ul>

    </div>
    </>
  )
}

export default Topbar