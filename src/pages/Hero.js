import React from 'react'
import './Hero.css';
import CategoriesCard from "../components/Categories/CategoriesCard"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Hero = ({handleLogout}) => {
    
    return (
        <section className="hero">
            <nav>
                <h2>WELCOME USER</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
          <CategoriesCard/>
        </section>
    )
}

export default Hero;