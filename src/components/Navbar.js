import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
    <div className="container">
  <a className="navbar-brand" href="/">
    <img src="https://img.icons8.com/flat_round/64/000000/synchronize.png" width="40" height="40" classNameName="d-inline-block align-top mr-3" alt=""/>
    <span>SHORT URL</span>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active px-5">
        <a className="nav-link h5" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item px-5">
        <a className="nav-link h5" href="/">About<span className="sr-only"></span></a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  );
}

export default Navbar;
