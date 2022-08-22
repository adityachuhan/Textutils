import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-${props.set}`}>
           <div className="container-fluid">
             <a className={`navbar-brand text-${props.set==='dark'?'light':'dark'}`} href="http://localhost:3000/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.set==='dark'?'light':'dark'}`} aria-current="page" to="/">{props.page}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.set==='dark'?'light':'dark'}`} to="/about">About us</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
    </form> */}
      <div className="form-check form-switch">
      <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.set==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
    </div>
  </div>
</nav>
    )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    page : PropTypes.string,
};

Navbar.defaultProps = {
    title: 'Add your title',
    page: 'Add your page name here'
  };