import PageTitle from "app/components/PageTitle";
import React from "react";
import { Link } from "react-router-dom";

const Interview = () => {
  return (
    <div>
      <PageTitle title="Last section: Short Interview">
        <p className="lead mb-5 text-black-50">
          This is the last part of the lab study. We will do a short 5 minute
          interview with you.
        </p>
        <br />
      </PageTitle>

      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <p>
              Once you finish, researchers will let you know about the Amazon
              Giftcards.
            </p>
            <br />
            <p>
              Please let us know if you have further question, and thank you for
              participating in the resarch study.
            </p>
            <br />

            <br />
            <Link to="/">
              <button type="submit" className="btn btn-primary">
                Finish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
