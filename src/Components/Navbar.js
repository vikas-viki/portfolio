import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../Styles/Navbar.css"
import {backgroundColor, headingColor,textColor} from "../data"

const Navbar = () => {
  return (
    <div className='' >
      <nav className="navbar  navbar-expand-lg p-0" style={{backgroundColor: backgroundColor}} >
        <div className="container-fluid px-5 navbar-body">
          <Link className="navbar-brand fs-2 fw-semibold lh-lg" to="/"  style={{color: headingColor,fontFamily: "Caveat, cursive"}}>&lt; Vikas kotary /&gt;</Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Vikas Kotary</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end fs-5 flex-grow-1 pe-3" >
                <li className="nav-item">
                  <NavLink className="nav-link px-3 py-3" to="/" style={{color: textColor}}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-3 py-3" to="/education" style={{color: textColor}}>Education</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-3 py-3" to="/projects" style={{color: textColor}}>Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-3 py-3" to="/contact_me" style={{color: textColor}}>contact me</NavLink>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar