import React from 'react'
import './Hero.css';
import CategoriesCard from "../components/Categories/CategoriesCard"

const Hero = () => {   
    return (
        <section className="hero">
            <nav>
           
            <h1 className="text-white p-3">
            <span style={{ color: "orange" }}></span>Welcome to the world of
            <span style={{ color: "orange" }}> Newsletters!</span>
          </h1>
            <div className="p-5">
            <button className="favBtn">Favourites</button>
            </div>
           
            </nav>
          <CategoriesCard/>
        </section>
    )
}

export default Hero;