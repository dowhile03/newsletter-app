import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import "./Home.css"
import {db} from "../../Firebase"
import swal from "sweetalert";


const Promote = () => {
    const history = useHistory();

    const [email,setEmail] = useState("");

    const onPromoteEmailSubmitted = (e) => {
        e.preventDefault();
        db.collection("WaitingList_Promoters").add({
            Email : email
        })
        .then(() => {
            swal({
                title: "Congratulations",
                text: "You have been added to our Waitlist, We will get back to you very soon!",
                icon: "success",
                dangerMode: false,
              })
        })
        .catch((err) => {
            swal({
                title: "Error!!",
                text: err,
                icon: "warning",
                dangerMode: true,
              })
        })
        setEmail("");


    }

  return (
    <div className='text-white'>
    
    <div className="text-white p-5" style={{ fontSize: "1rem" }}>
    <button onClick={() => history.goBack()} className="favBtn mx-2">
    <i className="fa fa-backspace"></i>
  </button> <br /><br />
  <div className='text-center mx-auto '>
  <h1>We appreciate your <span style={{color:"orange"}}>Interest</span></h1>
  <p>Please join the waiting list below, we will inform you as soon as a slot is available for you.</p>
  <p>This waiting list is due to high traffic, we are automating the process for the smooth functioning.
   Till then please enter your email and we will notify you.
  </p>
  <h4>Thanks for your Support. 🙏🙏</h4>
    </div>
      </div>
      <div className='container mx-auto text-center mt-5'>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className='promoteInput' type="text" placeholder='Email Address' />
       <button onClick={onPromoteEmailSubmitted} className='promoteBtn' type="button">Submit</button>
      </div>
    </div>
  )
}

export default Promote