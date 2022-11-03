import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link " to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/education">Education</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/projects">Projects</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/skills">Skills</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar