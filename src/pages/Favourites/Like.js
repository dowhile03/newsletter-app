import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import Login from "../Authentication/Login";
import swal from "sweetalert";

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
      swal({
        title: "Hey!",
        text: "Newsletter added to your favourite",
        icon: "success",
        dangerMode: false,
      })
    })
    .catch(()=>{
      swal("Oops!", "Something went wrong!", "error");
    })
  } 
    
},[Ids,id,auther,newsletterName,imgLink,linkAddress,isfree,isMonthly,isWeekly,isAnually,description,tag1,tag2,tag3])
    
    return (
        <div className="container">
        <center>
          <div
            className="container"
          >
          <button className="btn favBtn" onClick={addToFav}><i className="fas fa-heart"></i></button>
          </div>
        </center>
        <Login show={modalShow} onHide={() => setModalShow(false)} />

      </div>
    )
}

export default Like;
