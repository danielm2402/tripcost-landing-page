import React from 'react'
import logo from '../img/logo2.png'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand ml-5" to="/home">
            <img src={logo} alt="logo" style={{ width:'90px' }}/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i className="fas fa-bars" style={{color:'#fff'}}></i>
          </span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase ml-5" to="/home">
              &nbsp;<i class="fas fa-home"></i>  Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase ml-5" to="/explore">
                  &nbsp;<i class="fab fa-wpexplorer"></i>Explora</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase ml-5" to="/contact">
              <i class="fas fa-tty"></i>Contacto</Link>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    )
}
