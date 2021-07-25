import React from 'react'
import './hero.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Hero = ({handleLogout}) => {
    
    return (
        <section className="hero">
            <nav>
                <h2>WELCOME USER</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <React.Fragment>
        <h1 className="text-center text-danger text-capitalize my-5"> Top </h1>
            <h1 className="text-center text-danger text-capitalize my-5"> Newsletters </h1>
            <div className="container">
  <div className="row">
    <div className="col">
      <div className="card" >
  <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."
  height="200px"
  />
  <div className="card-body">
    <h5 className="card-title">Web Devlopment </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Our Projects</a>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card"> 
  <img src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nbyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt=".."
  height="200px"
  />
  <div className="card-body">
    <h5 className="card-title">Graphic designing</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Our Projects</a>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" >
  <img src="https://picsum.photos/200/300" className="card-img-top" alt=".."
  height="200px"
  />
  <div className="card-body">
    <h5 className="card-title">App Devlopment</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Our Projects</a>
  </div>
</div>

    </div>
  </div>
</div>
        </React.Fragment>
        </section>
    )
}

export default Hero;