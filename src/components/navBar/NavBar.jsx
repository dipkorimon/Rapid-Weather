import React from 'react'
import "./navBar.scss";
import Logo from "../../../public/logo.png";

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="left">
        <a href="/"><img src={Logo} alt="" /></a>
        <a href="/"><h3>Rapid Weather</h3></a>
      </div>
      <div className="right">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/weatherInfo">Weather Info</a>
        <a href="/developerInfo">Developer Info</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  )
}

export default NavBar