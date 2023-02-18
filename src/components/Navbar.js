import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
const setBgColor = (bgColorType) =>{
   if(bgColorType==='primary'){
    document.body.style.backgroundColor="#0d6efd";
    props.showAlert(bgColorType+' mode activated','success');
   }
   if(bgColorType==='secondary'){
    document.body.style.backgroundColor="#6c757d";
    props.showAlert(bgColorType+' mode activated','success');
   }
   if(bgColorType==='success'){
    document.body.style.backgroundColor="#198754";
    props.showAlert(bgColorType+' mode activated','success');
   }
   if(bgColorType==='danger'){
    document.body.style.backgroundColor="#dc3545";
    props.showAlert(bgColorType+' mode activated','success');
   }
   if(bgColorType==='warning'){
    document.body.style.backgroundColor="#ffc107";
    props.showAlert(bgColorType+' mode activated','success');
   }
   if(bgColorType==='info'){
    document.body.style.backgroundColor="#0dcaf0";
    props.showAlert(bgColorType+' mode activated','success');
   }
}

  return (
 
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>

        <button type="button" className="btn btn-primary btn-sm mx-2" theme="primary" onClick={()=>setBgColor('primary')}>Primary</button>
        <button type="button" className="btn btn-secondary btn-sm btn-sm mx-2" theme="secondary" onClick={()=>setBgColor('secondary')}>Secondary</button>
        <button type="button" className="btn btn-success btn-sm btn-sm mx-2" theme="success" onClick={()=>setBgColor('success')}>Success</button>
        <button type="button" className="btn btn-danger btn-sm btn-sm mx-2" theme="danger" onClick={()=>setBgColor('danger')}>Danger</button>
        <button type="button" className="btn btn-warning btn-sm btn-sm mx-2" theme="warning" onClick={()=>setBgColor('warning')}>Warning</button>
        <button type="button" className="btn btn-info btn-sm btn-sm mx-2" theme="info" onClick={()=>setBgColor('info')}>Info</button>

      {
      /*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> 
      */}

    <div className={`form-check form-switch text-${props.mode==="light" ? 'dark' : 'light'}  `}>
    <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
    <label className="form-check-label" >Enable Dark Mode</label>
    </div>

    </div>
  </div>
</nav>

  )
}
Navbar.propTypes = { 
    title: PropTypes.string.isRequired ,
    aboutText: PropTypes.string.isRequired
  };
Navbar.defaultProps = {
    title: 'Home',
    aboutText: 'About Us',
}