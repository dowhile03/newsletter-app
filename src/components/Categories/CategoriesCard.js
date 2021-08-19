import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
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

const addToFav = () => {
 auth.onAuthStateChanged((user) => {
     if(!user){
       history.push("/login")
     }
     else {
       console.log(user);
      db.collection('users-data').doc(`${user.uid}`).set({
        username:auth.currentUser.displayName,
        Email:auth.currentUser.email,
        fav:2,
        bk:5
      }).then(()=> {
        document.getElementById("emptyLike").style.display = "none"
        document.getElementById("filledLike").style.display = "block"
      })
     }
 }); 

}

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
}

  return (
    <div>
  {auth.currentUser && (
    <button type="button" className="btn btn-secondary m-5" onClick={logoutHandler}>Logout</button>
  )}

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
            <div style={{fontSize:"1.5rem",color:"white"}} onClick={addToFav} id="emptyLike">
            <i className="far fa-heart"></i>
            </div>
            <div style={{fontSize:"1.5vw",color:"white",display:"none"}} id="filledLike">
            <i className="fas fa-heart"></i>
            </div>
              <div className="cards-list">
              
              <Link style={{textDecoration:"none"}} to = {`/${item.id}/${item.catItem.link}`}>
              <div className="card 1">
                <div className="card_image"> <img src={item.catItem.imgLink} /> </div>
                <div className="card_title title-white">
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
