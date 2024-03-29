import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hero.css';
function Hero() {

  return (
    <div className="jumbotron">
    <div className="container-xl">
    <div className="row">
    <div className="col"> 
    <h1>SHORTER AND SECURE URL</h1>
    <p className="lead">Click learn more to get more information.</p>
    <a className="btn btn-primary btn-md shadow" href="https://droplr.com/how-to/productivity-tools/what-is-a-url-shortener/" role="button" target="_blank">Learn more</a>
  </div>
  <div className="col image"><img src="/1.svg" alt="prop"/></div>
</div>
</div>
</div>
  );
}

export default Hero;
