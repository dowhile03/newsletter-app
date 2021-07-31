import React, { useEffect, useState } from "react";
import Classes from "./CategoriesCard.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../Firebase";
import { Link, useParams } from "react-router-dom";


const CategoriesCard = () => {
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
              <Link to={`/${params.displayName}/${params.uid}/${item.id}/${item.catItem.link}`}>
              <div className={Classes["card-big-shadow"]}>
                <div
                  className={`${Classes.card} ${Classes["card-just-text"]}`}
                  style={{ backgroundColor: `${item.catItem.color}` }}
                  data-radius="none"
                >
                  <div className={Classes.content}>
                    <h6 className={Classes.category}>category</h6>
                    <h4 className={Classes.title}>
                      <a href="#">{item.catItem.cat}</a>
                    </h4>
                    <p className={Classes.description}>
                      {item.catItem.description}
                    </p>
                  </div>
                </div>
              </div>
              </Link>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
