import { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { Alert } from "react-bootstrap";
import Login from "../pages/Login";


const Like = ({id,auther,newsletterName,imgLink,linkAddress,isfree,isMonthly,isWeekly,isAnually,description,tag1,tag2,tag3}) => {
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
      auther:auther,
      newsletterName:newsletterName,
      img_link:imgLink,
      link:linkAddress,
      isfree:isfree,
      isMonthly:isMonthly,
      isWeekly:isWeekly,
      isAnually:isAnually,
      description: description,
      tag1:tag1,
      tag2:tag2,
      tag3:tag3
    })
    .then(()=>{
      Alert("added to id");
    })
    .catch(()=>{
      alert("You have already added this to your favourites");
    })
  }
    
},[Ids,id,auther,newsletterName,imgLink,linkAddress,isfree,isMonthly,isWeekly,isAnually,description])
 
    return (
        <div className="container">
        <center>
          <div
            className="container"
          >
          <button className="btn favBtn" onClick={addToFav}>Add to Fav</button>
          </div>
        </center>
        <Login show={modalShow} onHide={() => setModalShow(false)} />

      </div>
    )
}

export default Like
