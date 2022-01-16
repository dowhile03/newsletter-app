import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { useHistory } from "react-router";
const SearchResultPage = () => {
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();
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
    <div>
      <div className="text-white mx-auto p-5" style={{ fontSize: "1rem" }}>
      <button onClick={() => history.goBack()} className="favBtn mx-2">
        <i className="fa fa-backspace"></i>
      </button>
        <h1>
          Find your<span style={{ color: "orange" }}> Category!</span>
        </h1>
      </div>
      <form className="mt-4 mb-4 mx-auto">
        <div className="container1">
          <input
            value={searchTerm}
            id="searchBar"
            className="searchbar"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p id="btnSearch" className="btn-search">
            <i className="fa fa-search"></i>
          </p>
          <br />
          <br />
        </div>

        <div className="container bootstrap snippets bootdeys">
          <ul className="row list-unstyled" id="myUL">
            {category
              .filter((categ) =>
                categ.catItem.cat
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((item) => (
                <li
                  key={item.id}
                  className="col-sm-4"
                  style={{ marginTop: "30px" }}
                >
                  <div className="cards-list">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/${item.id}/${item.catItem.link}`}
                    >
                      <div className="card 1">
                        <div className="card_image">
                          {" "}
                          <img
                            src={item.catItem.imgLink}
                            width="100%"
                            height="100%"
                            alt="categoryImg"
                          />{" "}
                        </div>
                        <div className="card_title title-white">
                          <p style={{ background: "black" }}>
                            {item.catItem.cat}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Div for results */}
        <div className="resultant"></div>
      </form>
    </div>
  );
};

export default SearchResultPage;
