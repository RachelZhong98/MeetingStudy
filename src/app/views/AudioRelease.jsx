import PageTitle from "app/components/PageTitle";
import { db } from "app/firebase/firebaseConfig";
import React from "react";
import { useHistory } from "react-router-dom";

const AudioRelease = () => {
  const history = useHistory();

  const handleSubmit = async () => {
    let id = localStorage.getItem("id");

    if (!id) {
      history.push("/");
      return;
    }

    let pageList = ["/exp1", "/exp2", "/exp3"];
    let pageNumber = Math.ceil(Math.random() * 100) % 3;

    history.push(pageList[pageNumber]);
  };

  return (
    <div>
      <PageTitle title="Audio Release Consent Form" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h4 id="about">
              Please read through the audio release consent form before
              continuing
            </h4>
            <hr />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioRelease;
