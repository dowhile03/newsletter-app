import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { Link, useHistory, useParams } from "react-router-dom";
import Search from "../Search";
import '../TrendingCards.css'


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
            { (window.location.pathname === "/addcategory") &&  <button type="button" className="btn btn-secondary " onClick={()=>{history.push(`/${item.id}/${item.catItem.cat}/addnewsletter`)}}>Add Newsletter</button>}
            <div style={{fontSize:"1.5rem",color:"white"}} id="emptyLike">
            <i className="far fa-heart"></i>
            </div>
            <div style={{fontSize:"1.5vw",color:"white",display:"none"}} id="filledLike">
            <i className="fas fa-heart"></i>
            </div>
              <div class="cards-list">
              
              <Link style={{textDecoration:"none"}} to = {`/${item.id}/${item.catItem.link}`}>
              <div class="card 1">
                <div class="card_image"> <img src={item.catItem.imgLink} /> </div>
                <div class="card_title title-white">
                <p style={{background:"black"}}>{item.catItem.cat} 
               
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

export default CategoriesCard;
