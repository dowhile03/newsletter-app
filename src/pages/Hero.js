import React from 'react'
import './Hero.css';
import CategoriesCard from "../components/Categories/CategoriesCard"
import { auth } from '../Firebase';
import { useHistory } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Hero = () => {
    const history = useHistory()
    const logoutHandler = (e) => {
        e.preventDefault();
        auth
          .signOut()
          .then(() => {
            // Sign-out successful.
            history.push("/");
          })
          .catch((error) => {
            alert(error);
          });
      };
    return (
        <section className="hero">
            <nav>
                <h2>WELCOME USER</h2>
                <button onClick={logoutHandler} className="btn btn-primary">Logout</button>
            </nav>
          <CategoriesCard/>
        </section>
    )
}

export default Hero;