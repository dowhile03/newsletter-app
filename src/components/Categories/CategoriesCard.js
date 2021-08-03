import React, { useEffect, useState } from "react";
import Classes from "./CategoriesCard.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../Firebase";
import { useHistory, useParams } from "react-router-dom";


const CategoriesCard = () => {
  const history = useHistory();
    const params = useParams();
  const [category, setCategory] = useState([]);

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
      <div className="container bootstrap snippets bootdeys">
        <div className="row">
          {category.map((item) => (
              <div
              key={item.id}
              className="col-sm-4"
              style={{ marginTop: "30px" }}
              >
              <div className={Classes["card-big-shadow"]}>
                
                <div
                  className={`${Classes.card} ${Classes["card-just-text"]}`}
                  style={{ backgroundColor: `${item.catItem.color}` }}
                  data-radius="none"
                >
                  <button type="button" className="btn btn-secondary " onClick={()=>{history.push(`/${item.id}/${item.catItem.cat}/addnewsletter`)}}>Add Newsletter</button>
              <button type="button" className="btn btn-secondary " onClick={()=>{history.push(`/${params.displayName}/${params.uid}/${item.id}/${item.catItem.link}`)}}>Newsletters</button>
              
                  <div className={Classes.content}>
                    <h6 className={Classes.category}>category</h6>
                    <h4 className={Classes.title}>
                    {item.catItem.cat}
                    </h4>
                    <p className={Classes.description}>
                      {item.catItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
