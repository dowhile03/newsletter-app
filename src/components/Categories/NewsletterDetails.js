import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Footer from "../Footer";

const NewsletterDetails = () => {

  


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
        <h1>Newsletter Name</h1>
        <h5>- Writer of this newsletter</h5>
        <button className="btn btn-success">
          Subscribe <i className="fa fa-share"></i>
        </button>
        <br />
        <div className="pt-4">
          <span className="badge bg-danger m-2">🗓️Sent weekly</span>
          <span className="badge bg-primary m-2">Active</span>
          <span className="badge bg-warning m-2">Free</span>
          <span className="badge bg-secondary m-2">category</span>
        </div>
        <div className="img-fluid text-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
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
