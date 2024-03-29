import React, { Component } from 'react'
import logoImage from './img/profile.png'; // Import the image
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
 

  render() {

    let {toggleMode} = this.props;

    return (
      <div>
            
       
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div className="container-fluid">             
              <Link className="navbar-brand" to="/">
              <img src={logoImage} alt="Logo" width="100" height="30" className="d-inline-block align-text-top" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/Business">Business</Link>
                  </li> 
                  <li className="nav-item">
                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                  </li> 
                  <li className="nav-item">
                    <Link className="nav-link" to="/Science">Science</Link>
                  </li> 
                  <li className="nav-item">
                    <Link className="nav-link" to="/Sports">Sports</Link>
                  </li> 
                  <li className="nav-item">
                    <Link className="nav-link" to="/Health">Health</Link>
                  </li> 
                  <li className="nav-item">
                    <Link className="nav-link" to="/Technology">Technology</Link>
                  </li>

                </ul>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{fontWeight: 'medium'}}>Dark Mode</label>
                </div>
              </div>
              
            </div>
        </nav>
      </div>
    )
  }
}
