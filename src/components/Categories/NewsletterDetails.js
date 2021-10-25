import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useParams } from "react-router";
import { db } from "../../Firebase";
import Footer from "../Footer";

const NewsletterDetails = () => {

  const params = useParams();
  const [newsletter, setNewsletter] = useState([]);

  useEffect(() => {
    db.collection("categories")
      .doc(`${params.categoryId}`)
      .collection("newletter")
      .doc(`${params.newsletterId}`)
      .onSnapshot((snapshot) => {
        setNewsletter({
         data:snapshot.data(),
         id: snapshot.id
         } );
      });
  }, [params.categoryId]);
console.log(newsletter.data);


  return (
    <div>
      <div
        className="container text-white mx-auto p-5"
        style={{ fontSize: "1rem" }}
      >
        <Link to="/">
          <button className="favBtn mx-2">Home</button>
        </Link>
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
        <h1>{newsletter.data.newsletterName}</h1>
        <h5>- {newsletter.data.auther}</h5>
        <a className="btn btn-success">
         <Link to={newsletter.data.link}> Subscribe </Link> <i className="fa fa-share"></i>
        </a>
        <br />
        <div className="pt-4">
          { (newsletter.data.isWeekly) && <span className="badge bg-danger m-2">🗓️Sent weekly</span> }
          { (newsletter.data.isfree) && <span className="badge bg-danger m-2">Free</span> }
          { (!newsletter.data.isfree) && <span className="badge bg-danger m-2">Paid</span> }

          { (newsletter.data.isMonthly) && <span className="badge bg-danger m-2">🗓️Sent Monthly</span> }
          { (newsletter.data.isAnually) && <span className="badge bg-danger m-2">🗓️Sent Anually</span> }

    
        </div>
        <div className="img-fluid text-center">
          <img
            src={newsletter.data.img_link}
            alt=""
            width="50%"
          />
          <div className="pt-4">
            <span className="badge bg-secondary m-2">tag1</span>
            <span className="badge bg-secondary m-2">tag2</span>
            <span className="badge bg-secondary m-2">tag3</span>
            <span className="badge bg-secondary m-2">tag4</span>
          </div>
        </div>
        <div>
          {newsletter.data.description}
        </div>
        <div
          className="text-white mt-5 p-5"
          style={{ border: "1px solid gray" }}
        >
          <h3>Discussions 😊</h3>
          <form>
            <div class="form-row align-items-center">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Any comments..."
                />
              </div>
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="text-dark mt-5 p-5" style={{ background: "white" }}>
          <h3>
            Subscribe to our own newsletter and get top newsletters in your
            inbox. 😊
          </h3>
          <form>
            <div class="form-row align-items-center">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">
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

export default NewsletterDetails;
