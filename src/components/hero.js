import React from 'react'
import Classes from './hero.module.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CategoriesCard from './Categories/CategoriesCard';
import CategoryList from './Categories/CategoryList';

const Hero = ({handleLogout}) => {
    
    return (

        <section className = {Classes.hero}>
        
            <nav>
                <h2>WELCOME USER</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
            
        </section>
    )
}

export default Hero;