import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import logo from '../assets/images/morgan-logo.png'; 
import {Link, useLocation} from 'react-router-dom' 

function Header() {

  const location = useLocation();

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className='p-md-4 p-2' bg="light" data-bs-theme="light">
          <Navbar.Brand>
            <Link to='/'>
               <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse className="justify-content-end text-uppercase custom-nav" id="basic-navbar-nav">
            <Nav>
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About Us</Link>
              <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link>
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
