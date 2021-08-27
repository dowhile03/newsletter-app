import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { db,auth } from '../../Firebase'
import img from "../../creative-hand.jpg"
import Firebase from 'firebase'

const Favourites = () => {
  const [category, setCategory] = useState([]);

  const deleteFav = (id) => {
    db.collection("users-data").doc(`${auth.currentUser.uid}`).update({
        FavouriteIds : Firebase.firestore.FieldValue.arrayRemove(id)
      })
      .then(()=>{
        alert("removed from id");
      })
      
  }

    useEffect(() => {
        let fav =  db.collection("users-data").doc(`${auth.currentUser.uid}`)
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
        <div className="container bootstrap snippets bootdeys">
        <ul className="row list-unstyled" id="myUL">
          {category.map((item) => (
            <li
              key={item.id}
              className="col-sm-4"
              style={{ marginTop: "30px" }}
            >
              
              <Button className="btn btn-primary" onClick={()=>{deleteFav(item.id)}}>Remove from Fav</Button>
          
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
    )
}

export default Favourites
