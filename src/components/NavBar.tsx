import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <section>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid ">
    <a className="navbar-brand text-white" href="/">EDUWORLD</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav m-auto">
     <li className="nav-item active">
          <NavLink className="nav-link text-white text-uppercase ms-5"  to="/">Home  <span className="sr-only">current</span></NavLink> 

        </li>
        <li className="nav-item ">
          <NavLink className="nav-link text-white text-uppercase ms-5"  to="/cources">Cources</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link text-white text-uppercase ms-5"  to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link text-white text-uppercase ms-5"  to="/about">About</NavLink>
        </li>
        </ul>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
     </div>
     </div>
     </nav>
    </section>
  )
}

export default NavBar