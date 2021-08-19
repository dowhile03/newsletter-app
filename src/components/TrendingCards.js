import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import "./TrendingCards.css";

const TrendingCards = () => {

  const [trendingCards, setTrendingCards] = useState([]);

  useEffect(() => {
    db.collection("trending-newsletters").onSnapshot((snapshot) => {
      setTrendingCards(
        snapshot.docs.map((doc) => ({
          trenItem: doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);


  return (
    <ul className="row list-unstyled">
    {trendingCards.map((item) => (
      <li className="col-sm-4" key={item.id}>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            {" "}
            <img src={item.trenItem.link} alt="img" />{" "}
          </div>
          <div className="card_title title-white">
            <p style={{background:"black",fontSize:"large"}}>{item.trenItem.name} - by {item.trenItem.auther} </p>
          </div>
        </div>
      </div>
    </li>
  
    ))}
      
    
    </ul>
  );
};

export default TrendingCards;
