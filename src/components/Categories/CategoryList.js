import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../Firebase";
import Like from "../Like";
import Typewriter from 'typewriter-effect'

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
   
  <div className="container text-white mx-auto p-5" style={{ fontSize: "1rem" }}>
  <h1 className="text-white p-3">
    <span style={{ color: "orange" }}></span>Finally here are your 
    <span style={{ color: "orange" }}> Newsletters!</span>
  </h1>
      <Typewriter
        options={{
          strings: [
            "Your Customized Newsletters",
            "Add to Fav",
            "Don't Forget to give forget",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>

    <hr />
    <div className="container bootstrap snippets bootdeys">
    <ul className="row list-unstyled" id="myUL">
      {newsletter.map((letter) => (
        
        <li
        key={letter.id}
        className="col-sm-4"
        style={{ marginTop: "30px" }}
        >
        <Like
                id={letter.id}
                auther={letter.newsletter.auther}
                company={letter.newsletter.company}
                imgLink={letter.newsletter.img_link}
                link={letter.newsletter.link}
                cost ={letter.newsletter.cost}
              />
          <div className="cards-list">
          <Link style={{textDecoration:"none"}} to={letter.newsletter.link} target="_blank">
          <div className="card 1">
            <div className="card_image"> <img src={letter.newsletter.img_link} alt="newletterImg" /> </div>
            <div className="card_title title-white">
            <p style={{background:"black",fontSize:'1.4rem'}}>{letter.newsletter.company} by- {letter.newsletter.auther} 
           
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
