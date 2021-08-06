import React, { useEffect, useState } from "react";
import Classes from "./CategoriesCard.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../Firebase";
import { useHistory, useParams } from "react-router-dom";
import Search from "../Search";


const CategoriesCard = () => {
  const history = useHistory();
    const params = useParams();
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('')

  function myFunction(e) {
  
    var  ul, li, a, i, txtValue;
    setSearch(e.target.value);
    let filter  = search.toUpperCase(); 
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

  return (
    <div>
<Search placeholder={"Enter the category to search"}  onChange={myFunction} />
      <div className="container bootstrap snippets bootdeys">
        <ul className="row list-unstyled" id="myUL">
          {category.map((item) => (
            
              <li
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
                  { (window.location.pathname === "/addcategory") &&  <button type="button" className="btn btn-secondary " onClick={()=>{history.push(`/${item.id}/${item.catItem.cat}/addnewsletter`)}}>Add Newsletter</button>}
              <button type="button" className="btn btn-secondary " onClick={()=>{history.push(`/${params.displayName}/${params.uid}/${item.id}/${item.catItem.link}`)}}>Newsletters</button>
              
                  <div className={Classes.content}>
                    <h6 className={Classes.category}>category</h6>
                    <h4 className={Classes.title} >
                    {item.catItem.cat}
                    </h4>
                    <p className={Classes.description}>
                      {item.catItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesCard;
