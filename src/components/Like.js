import { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { Alert, Button } from "react-bootstrap";
import Login from "../pages/Login";


const Like = ({id,category,description,imgLink,link}) => {
  const [modalShow, setModalShow] = useState(false);
  const [Ids,setIds] = useState("");

  const addToFav = () => {
    auth.onAuthStateChanged((user) => {
      if(!user){
       setModalShow(true)
      }
      else {
     setIds(id)
       
      }
  })
  }
  


useEffect(()=>{
  if(Ids !== "") {
    db.collection("users-data").doc(`${auth.currentUser.uid}`).collection('user-favourite').doc(`${id}`).set({
      FavouriteIds : id,
      FavCategory : category,
      FavDescription : description,
      FavImgLink : imgLink,
      FavUrlLink : link
    })
    .then(()=>{
      Alert("added to id");
    })
    .catch(()=>{
      alert("You have already added this to your favourites");
    })
  }
    
},[Ids])
 
    return (
        <div className="container">
        <center>
          <div
            className="container"
          >
          <Button className="btn btn-[rimary" onClick={addToFav}>Add to Fav</Button>
          </div>
        </center>
        <Login show={modalShow} onHide={() => setModalShow(false)} />

      </div>
    )
}

export default Like
