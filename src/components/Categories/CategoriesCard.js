import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import firebase from "firebase/app";
import { Link, useHistory, useParams } from "react-router-dom";
import Search from "../Search";
import "../TrendingCards.css";
import Login from "../../pages/Login";
import Like from "../Like";
import img from "../../creative-hand.jpg"


const CategoriesCard = () => {
  const history = useHistory();
  const params = useParams();
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [modalShow, setModalShow] = useState(false);
  function myFunction(e) {
    var ul, li, a, i, txtValue;
    setSearch(e.target.value);
    let filter = search.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("div")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

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

      <Search
        placeholder={"Enter the category to search"}
        onChange={myFunction}
      />
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
              <Like id={item.id} />
              {window.location.pathname === "/addcategory" && (
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    history.push(
                      `/${item.id}/${item.catItem.cat}/editnewsletter`
                    )
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
                      <img src={img} width="100%" height="100%"/>{" "}
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
