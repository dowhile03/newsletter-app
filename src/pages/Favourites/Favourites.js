import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "../../Firebase";
import img from "../../creative-hand.jpg";

const Favourites = () => {
  const [category, setCategory] = useState([]);

  const deleteFav = (id) => {
    db.collection("users-data")
      .doc(`${auth.currentUser.uid}`)
      .collection("user-favourite")
      .doc(`${id}`)
      .delete();
  };

  useEffect(() => {
    db.collection("users-data")
      .doc(`${auth.currentUser.uid}`)
      .collection("user-favourite")
      .onSnapshot((snapshot) => {
        setCategory(
          snapshot.docs.map((doc) => ({
            catItem: doc.data(),
            id: doc.id,
          }))
        );
      });
  }, []);
    
  return (
    <div className="container bootstrap snippets bootdeys">
    <section className="hero">
    <nav>
   
    <h1 className="text-white p-3">
    <span style={{ color: "orange" }}></span>Your
    <span style={{ color: "orange" }}> Favourites!</span>
  </h1>
    </nav>
</section>
      <ul className="row list-unstyled" id="myUL">
        {category.map((item) => (
          <li key={item.id} className="col-sm-4" style={{ marginTop: "30px" }}>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                deleteFav(item.id);
              }}
            >
              Remove
            </button>

            <div className="cards-list">
              <Link
                style={{ textDecoration: "none" }}
                to={`/${item.id}/${item.catItem.FavUrlLink}`}
              >
                <div className="card 1">
                  <div className="card_image">
                    {" "}
                    <img
                      src={img}
                      width="100%"
                      height="100%"
                      alt="categoryImg"
                    />{" "}
                  </div>
                  <div className="card_title title-white">
                    <p style={{ background: "black" }}>
                      {item.catItem.FavCategory}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
