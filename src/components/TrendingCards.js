import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { db } from "../Firebase";
import "./TrendingCards.css";


const TrendingCards = () => {
const params = useParams()
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
      <Link style={{textDecoration:"none"}} to={`/${item.id}/trendingdetails`}>
        <div className="card 1">
          <div className="card_image">
            {" "}
            <img src={item.trenItem.img_link} alt="img" width="100%" height="100%" />{" "}
          </div>
          <div className="card_title title-white">
            <p style={{background:"black",fontSize:"large"}}>{item.trenItem.newsletterName} - by {item.trenItem.auther} </p>
          </div>
        </div>
        </Link>
      </div>
    </li>
  
    ))}
      
    
    </ul>
  );
};

export default TrendingCards;
