import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../Firebase";
import Like from "../Like";

const CategoryList = () => {
  const params = useParams();
  const [newsletter, setNewsletter] = useState([]);

  useEffect(() => {
    db.collection("categories")
      .doc(`${params.categoryId}`)
      .collection("newletter")
      .onSnapshot((snapshot) => {
        setNewsletter(
          snapshot.docs.map((doc) => ({
            newsletter: doc.data(),
            id: doc.id,
          }))
        );
      });
  }, [params.categoryId]);

  return (
    <div>
    <h2>Top rated Newsletters</h2>
    <hr />
    <div className="container bootstrap snippets bootdeys">
    <ul className="row list-unstyled" id="myUL">
      {newsletter.map((letter) => (
        
        <li
        key={letter.id}
        className="col-sm-4"
        style={{ marginTop: "30px" }}
        >
        <Like  id={letter.id}/>
          <div className="cards-list">
          <Link style={{textDecoration:"none"}}>
          <div className="card 1">
            <div className="card_image"> <img src={letter.newsletter.img_link} /> </div>
            <div className="card_title title-white">
            <p style={{background:"black"}}>by- {letter.newsletter.auther} 
           
            </p>
            </div>
            </div>
            </Link>
              </div>
              </li>
              
      ))}
    </ul>
  </div>
             
    </div>
  );
};

export default CategoryList;
