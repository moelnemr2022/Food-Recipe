import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo2 from './imges/logo2.png'

export default function NavBar() {
  return (

    <nav className="navbar bg-dark navbar-expand-lg  " data-bs-theme="dark">

      <div className="container-fluid " >
        <Link className="nav-link active logo navbar-brand" to="/Food-Recipe"> 
        
          <img className='logo-img' src={logo2}/>
          Food-Recipe
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='Nav-right'>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-1 mx-4 ">
            <li className="nav-item">
              <Link className="nav-link " to="/Food-Recipe">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Food-Recipe/Category">Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Food-Recipe/Area">Area</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">AboutUs</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>  */}


        </div>
        </div>
      </div>
    </nav>

  )
}
