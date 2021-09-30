import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect"
import Footer from '../Footer';



const NewsletterDetails = () => {
 

    return (
        <div>
   
        <div className="container text-white mx-auto p-5" style={{ fontSize: "1rem" }}>
        <Link to="/"><button className="favBtn mx-2">Home</button></Link>
        <h1 className="text-white p-3">
          <span style={{ color: "orange" }}></span>Insightful
          <span style={{ color: "orange" }}> Details</span>
        </h1>
            <Typewriter
              options={{
                strings: [
                  "Your Customized Newsletters",
                  "Add to Fav",
                  "we make sure you get, what you want",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
              <div>
                <h1 className="text-white p-3">Title of Newsletter</h1>
                <p className="text-white p-3">Description of newsletter in two to three lines</p>
              </div>
          <hr />
         <div>
         
         </div>
               <Footer/>    
          </div>
    )
}

export default NewsletterDetails
