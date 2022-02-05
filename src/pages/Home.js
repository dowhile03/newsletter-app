import React, { useEffect, useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { db } from "../Firebase";
import Search from "../components/Search/Search";
import TrendingCards from "../components/TrendingCards";
import Footer from "../components/Footer"

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    db.collection("categories").onSnapshot((snapshot) => {
      setCategory(
        snapshot.docs.map((doc) => ({
          catItem: doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="container">
    <div className="text-white mx-auto p-5" style={{ fontSize: "1rem" }}>
    <h1>Spam <span style={{color:"orange"}}>Folder</span></h1>
    <div align='right' className="d-block"><p>Visitors</p><img src='http://www.hit-counts.com/counter.php?t=MTQ2MDg0Ng==' border='0' alt='logo designers'/></div>

        <Typewriter
          options={{
            strings: [
              "Customized Newsletters",
              "Multiple categories",
              "Trending Newsletters",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    <Search/>

      <div className="horizontal_slider">
        <div className="slider_container">
          {category.map((item) => (
            <Link key={item.id} to={`/${item.id}/${item.catItem.link}`}>
            <div className="item p-3" >
             <img src={item.catItem.imgLink} width="100%" height="100%" alt="cardImg"/>
            <p className="text-white text-center">{item.catItem.cat}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>

      <Link style={{ textDecoration: "none" }} to="/newsletter/categories">
        {" "}
        <p className="text-white">
          Explore <span style={{ color: "orange  " }}>More</span>
        </p>{" "}
      </Link>

      <h1 className="text-white p-5">
        <span style={{ color: "orange" }}>#</span>Tren
        <span style={{ color: "orange" }}>ding...</span>
      </h1>
    
     <TrendingCards/>
     <Footer/>
    </div>
  );
};

export default Home;
