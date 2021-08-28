import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import { Link, useHistory } from "react-router-dom";
import Search from "../Search";
import "../TrendingCards.css";
import Login from "../../pages/Login";
import Like from "../Like";
import img from "../../creative-hand.jpg";

const CategoriesCard = () => {
  const history = useHistory();
  const [category, setCategory] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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

  const deleteThisNewsletter = (id) => {
    db.collection("categories").doc(id).collection("newsletter").doc().delete();
    db.collection("categories").doc(id).delete();
  };

  return (
    <div>
      {auth.currentUser && (
        <button
          type="button"
          className="btn btn-secondary m-5"
          onClick={logoutHandler}
        >
          Logout
        </button>
      )}

      <Search placeholder={"Enter the category to search"} />
      <Login show={modalShow} onHide={() => setModalShow(false)} />

      <div className="container bootstrap snippets bootdeys">
        <ul className="row list-unstyled" id="myUL">
          {category.map((item) => (
            <li
              key={item.id}
              className="col-sm-4"
              style={{ marginTop: "30px" }}
            >
              {window.location.pathname === "/addcategory" && (
                <button
                  type="button"
                  className="btn btn-secondary "
                  onClick={() => {
                    history.push(
                      `/${item.id}/${item.catItem.cat}/addnewsletter`
                    );
                  }}
                >
                  Add Newsletter
                </button>
              )}
              <Like
                id={item.id}
                category={item.catItem.cat}
                description={item.catItem.description}
                imgLink={item.catItem.imgLink}
                link={item.catItem.link}
              />
              {window.location.pathname === "/addcategory" && (
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    history.push(
                      `/${item.id}/${item.catItem.cat}/editnewsletter`
                    );
                  }}
                >
                  Edit Category
                </button>
              )}
              {window.location.pathname === "/addcategory" && (
                <button
                  type="button"
                  className="btn "
                  onClick={() => {
                    deleteThisNewsletter(item.id);
                  }}
                >
                  <i className="fas fa-trash text-white"></i>
                </button>
              )}
              <div className="cards-list">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/${item.id}/${item.catItem.link}`}
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
                      <p style={{ background: "black" }}>{item.catItem.cat}</p>
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

export default CategoriesCard;
