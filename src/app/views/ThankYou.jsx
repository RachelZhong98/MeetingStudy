import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div>
      <main role="main">
        <div className="text-center">
          <div
            className="container"
            style={{
              marginTop: "15%",
            }}
          >
            <h1 className="display-4">Thank you</h1>
            <p className="mb-4">You have Successfully Completed Your Survey</p>
            <div className="mb-5 text-center">
              <Link to="/">
                <Button>Go to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
