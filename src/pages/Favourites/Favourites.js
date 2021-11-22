import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "../../Firebase";
import ReactPaginate from 'react-paginate';
import { useHistory } from "react-router";

const Favourites = () => {

  const history = useHistory();

  const [category, setCategory] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);

  const userPerPage = 6;
  const pageVisited = pageNumber* userPerPage
  const pageCount = Math.ceil(category.length / userPerPage)

  const deleteFav = (id) => {
    db.collection("user-details")
      .doc(`${auth.currentUser.uid}`)
      .collection("user-favourite")
      .doc(`${id}`)
      .delete();
  };
  

  useEffect(() => {
    db.collection("user-details")
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

  const changePage = ({selected}) => {
    setPageNumber(selected)
}
    
  return (
    <div className="container bootstrap snippets bootdeys">
    <section className="hero">
    <nav>
   
    <h1 className="text-white p-3">
    <span style={{ color: "orange" }}></span>Your
    <span style={{ color: "orange" }}> Favourites!</span>
  </h1>
  <Link to="/">
  <button className="favBtn mx-2"><i className="fa fa-home"></i></button>
</Link>
<button onClick={() => history.goBack()} className="favBtn mx-2"><i className="fa fa-backspace"></i></button>

    </nav>
</section>
      <ul className="row list-unstyled" id="myUL">
        {category.slice(pageVisited,pageVisited+userPerPage).map((item) => (
          <li key={item.id} className="col-sm-4" style={{ marginTop: "30px" }}>
            <button
              className="btn btn-outline-danger d-block mx-auto"
              onClick={() => {
                deleteFav(item.id);
              }}
            ><i className="fa fa-trash"></i></button><div className="cards-list">
              <Link
                style={{ textDecoration: "none" }}
                to={`${item.id}/moredetails`}
              >
                <div className="card 1">
                  <div className="card_image">
                    {" "}
                    <img
                      src={item.catItem.img_link}
                      width="100%"
                      height="100%"
                      alt="categoryImg"
                    />{" "}
                  </div>
                  <div className="card_title title-white">
                    <p style={{ background: "black",fontSize:"1.4rem" }}>
                      {item.catItem.newsletterName} by - {item.catItem.auther}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}     
                  />
    </div>
  );
};

export default Favourites;
