import PageTitle from "app/components/PageTitle";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Consent = () => {
  return (
    <div>
      <PageTitle title="Consent Form" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h4 id="about">
              Please read, sign the consent form and press next
            </h4>
            <hr />
            <br />
            <Link to="/think-aloud-protocol">
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consent;
