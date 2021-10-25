import { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { Alert } from "react-bootstrap";
import Login from "../pages/Login";


const Like = ({id,auther,imgLink,link,name,description}) => {
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
    db.collection("user-details").doc(`${auth.currentUser.uid}`).collection('user-favourite').doc(`${id}`).set({
      FavouriteIds : id,
      FavAuther : auther,
      FavName : name,
      FavImgLink : imgLink,
      FavUrlLink : link,
      FavDesc:description
    })
    .then(()=>{
      Alert("added to id");
    })
    .catch(()=>{
      alert("You have already added this to your favourites");
    })
  }
    
},[Ids,auther,description,imgLink,link,id,name])
 
    return (
        <div className="container">
        <center>
          <div
            className="container"
          >
          <button className="btn" style={{background:"orange",borderRadius:"15px"}} onClick={addToFav}>Add to Fav</button>
          </div>
        </center>
        <Login show={modalShow} onHide={() => setModalShow(false)} />

      </div>
    )
}

export default Like
