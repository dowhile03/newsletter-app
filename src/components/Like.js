import { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { Button } from "react-bootstrap";
import Login from "../pages/Login";

const Like = ({id}) => {
  const [modalShow, setModalShow] = useState(false);
  const [Ids,setIds] = useState("")

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
  if(Ids != "") {
    db.collection("users-data").doc(`${auth.currentUser.uid}`).collection('favourites').add({
      FavouriteId: Ids
    })
    .then(()=>{
      console.log("added to id");
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
