import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
             {props.aboutApp}
             {/* props=>props means properties. If you make some component and want to pass some properties */}
            </Link>
          </li>
        </ul>
        {/* <div className="d-flex">
          <div className="bg-success rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={()=>{props.colorMode('success')}}></div>
          <div className="bg-danger rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={()=>{props.colorMode('danger')}}></div>
          <div className="bg-primary rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={()=>{props.colorMode('primary')}}></div>
          <div className="bg-warning rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={()=>{props.colorMode('warning')}}></div>
        </div> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
//If you pass any variable with out string then this will through a error. Checks the type of prop

Navbar.propType={
  title: PropTypes.string.isRequired,
  aboutApp: PropTypes.string.isRequired
}

//If you don't pass any value then this defaultProps method sets the defalut value

Navbar.defaultProps={
  title: 'Set title here',
  aboutApp: 'About text here'
}
