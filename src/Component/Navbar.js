import React from 'react'
import Brand from "../Images/Brand.png"

const Navbar = () => {
  return (
    <div>
      <nav>
            <div >
                <a href="/" className="brandIcon">
                <img src={Brand} alt="CleverCode"  width={60} height={60}/>
                <h2>CleverCode</h2>
                </a>
            </div>
            <div className="navLinks" id="Hamburger">
                <ul>
                    <li><a href="#link">Home</a></li>
                    <li><a href="#link">Blog</a></li>
                    <li><a href="#link">Contact</a></li>
                    <li><a href="#link">Contact</a></li>
                </ul>
            </div>
            <div className="btnSection">
                <a href="ref" className="btn">Dashboard</a>
                <a href="ref" className="btn p-bg">Login</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar