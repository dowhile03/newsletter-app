import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useParams ,useHistory} from "react-router";
import { db } from "../Firebase";
import Footer from "./Footer";
import swal from 'sweetalert';


const TrendingDetails = () => {

  const params = useParams();
  const history = useHistory();
  const [newsletter, setNewsletter] = useState([]);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  useEffect(() => {
    db.collection("trending-newsletters").doc(params.newsletterId).onSnapshot((snapshot) => {
        setNewsletter(
            snapshot.data()
           );
        })
  },[params.newsletterId]);

  
const newsletterEmailDetails = (e) => {
  e.preventDefault();
     db.collection("EmailSubscribers").add({
      email : subscribeEmail
     })
     .then(() => {
      swal({
        title: "Spam Folder",
        text: "Thanks for being our subscriber!",
        icon: "success",
        dangerMode: false,
      })
     })
     .catch((e) => {
      swal("Oops!", "Something went wrong!", "error");
     })
}
  
  return (
    <div>
      <div
        className="container text-white mx-auto p-5"
        style={{ fontSize: "1rem" }}
      >
        <Link to="/">
          <button className="favBtn mx-2">Home</button>
        </Link>
  <button onClick={() => history.goBack()} className="favBtn mx-2"><i className="fa fa-backspace"></i></button>

        <h1 className="text-white p-3">
          <span style={{ color: "orange" }}></span>Insightful
          <span style={{ color: "orange" }}> Details</span>
        </h1>
        <Typewriter
          options={{
            strings: [
              "Your Customized Newsletters",
              "Add to Fav",
              "we make sure you get, what you want",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <hr className="mx-auto" style={{ color: "white", width: "50%" }} />
      <br />
      <div className="text-white container">
        <h1>{newsletter.newsletterName}</h1>
        <h5>- {newsletter.auther}</h5>
        <button className="btn btn-success">
         <a rel="noopener noreferrer" target="_blank" style={{textDecoration:"none",color:"white"}} href={newsletter.link}> Subscribe </a> <i className="fa fa-share"></i>
        </button>
        <br />
        <div className="pt-4">
          { (newsletter.isWeekly) && <span className="badge bg-danger m-2">🗓️Sent weekly</span> }
          { (newsletter.isfree) && <span className="badge bg-danger m-2">Free</span> }
          { (!newsletter.isfree) && <span className="badge bg-danger m-2">Paid</span> }

          { (newsletter.isMonthly) && <span className="badge bg-danger m-2">🗓️Sent Monthly</span> }
          { (newsletter.isAnually) && <span className="badge bg-danger m-2">🗓️Sent Anually</span> }
          <span className="badge bg-danger m-2">{newsletter.tag1}</span>
          <span className="badge bg-danger m-2">{newsletter.tag2}</span>
          <span className="badge bg-danger m-2">{newsletter.tag3}</span>
    
        </div>
        <div className="img-fluid text-center">
          <img
            src={newsletter.img_link}
            alt=""
            width="50%"
          />
       
        </div>
        <br /><br />
        <div>
          {newsletter.description}
        </div>
<br /><br /><br />
        <h4 className="mt-5 pt-5" style={{fontFamily:"revert",fontStyle:"italic",fontWeight:"bolder"}}>
        Hi👋, <br />
Thank you for interest in us. We appreciate your interest.
We will do our best to notify you about interesting and useful resources. <br />
May we kindly drop your email below!
        </h4>
        <div
          className="text-white mt-5 p-5"
          style={{ border: "1px solid gray" }}
        >
          <h3>Discussions 😊</h3>
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Any comments..."
                />
              </div>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="text-dark mt-5 p-5" style={{ background: "white" }}>
          <h3>
            Subscribe to our own newsletter and get top newsletters in your
            inbox.😊
          </h3>
          <form onSubmit={newsletterEmailDetails}>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <input
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                  type="email"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrendingDetails;
