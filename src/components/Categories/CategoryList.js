import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase";
import Classes from "./CategoryList.module.css";

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
      <div className="col-md-10 ">
        <div className="row ">
        {newsletter.map((letter) => (
          <div className="col-xl-3 col-lg-6">
              <div className={`${Classes.card}`} style={{backgroundColor:`${letter.newsletter.color}`}}>
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">
                      {letter.newsletter.company}
                    </h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h6 className="d-flex align-items-center mb-0">Price -  3,243</h6>
                    </div>
                    <div className="col-4 text-right">
                      <span>
                        likes-5 <i className="fa fa-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                
                </div>
              </div>
              </div>
              ))}
              </div>
              </div>
              <hr />
             <h6> category 2 newsletters </h6>
    </div>
  );
};

export default CategoryList;
