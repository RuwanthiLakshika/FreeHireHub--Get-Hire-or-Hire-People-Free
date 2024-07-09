import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#470005"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">FreeHireHub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item" style={{marginLeft:"1050px"}}>
          <Link className="nav-link" style={{color: "white"}} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/employer/dashboard">Hire Talent</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/employee/feed">Get Job Now</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header