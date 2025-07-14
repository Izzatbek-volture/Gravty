import React from 'react'

export default function Navbar() {
  return (
   <nav>
    <div className="container navbar">
        <img src="./img/Logo.png" alt="" />
        <ul>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Why Gravity</a></li>
            <li><a href="">Sign In</a></li>
        </ul>
    </div>
   </nav>
  )
}
