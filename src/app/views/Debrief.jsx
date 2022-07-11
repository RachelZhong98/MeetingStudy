import PageTitle from "app/components/PageTitle";
import React from "react";
import { Link } from "react-router-dom";

const Debrief = () => {
  return (
    <div>
      <PageTitle title="We are almost done!">
        <br />
        <br />
        <p className="lead mb-5 text-black-50">
          Please make sure to finish the survey form before continuing.
        </p>
      </PageTitle>

      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <br />
            <Link to="/interview">
              <button type="submit" className="btn btn-primary">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debrief;
