import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Topbar.css"

function Topbar() {
  return (
    <>
    <div className='topbar' >
        <div className="logo">
         <img
                src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo2MCwidyI6MTI1MCwiZnMiOjQ4LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UFJBTkFZIFNBTFVOS0U=/madrigal.png"

                alt=""
              />
        </div>
            <ul>
            <NavLink to="/">
                <li>Home</li>
                </NavLink>
            <NavLink to="/skill">
                <li>Skills</li>
                </NavLink>
                <NavLink to="/work">
                <li>Work</li>
                </NavLink>
                <NavLink to="/contact">
                  <li>Contact</li>
                  
                  </NavLink>
                  
            </ul>
          <div className="resume-button">
        <a href="/pranayresume (1).pdf" target="_blank" rel="noopener noreferrer">
          <button>View Resume</button>
        </a>
      </div>
    </div>
    </>
  )
}

export default Topbar
