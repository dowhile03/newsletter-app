import { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { Alert } from "react-bootstrap";
import Login from "../pages/Login";


const Like = ({auther,newsletterName,img_link,link,isfree,isMonthly,isWeekly,isAnually,description}) => {
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
      description: description
    })
    .then(()=>{
      Alert("added to id");
    })
    .catch(()=>{
      alert("You have already added this to your favourites");
    })
  }
    
},[auther,newsletterName,img_link,link,isfree,isMonthly,isWeekly,isAnually,description])
 
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
