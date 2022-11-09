import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Hidden brand</a>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>

        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
        <Link to="/login" className="btn btn-danger">Login</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Header