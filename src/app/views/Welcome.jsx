import React from "react";
import { db } from "../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";
import PageTitle from "app/components/PageTitle";
import { Button } from "react-bootstrap";

const Welcome = () => {
  const history = useHistory();

  const handleSubmit = () => {
    let id = localStorage.getItem("id");

    if (!id) {
      let ref = db.collection("mockResult").doc();
      id = ref.id;
      localStorage.setItem("id", ref.id);
    }

    history.push("/consent-form");
    // firebase.firestore.FieldValue.serverTimestamp()
  };

  return (
    <div>
      <PageTitle title="Welcome to the Web Usability Study" />

      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <p>Make sure you use *FULL SCREEN* throughout this study.</p>
            <p className="mb-5">
              Please open this survey link in a new tab:{" "}
              <a
                href="https://gatech.co1.qualtrics.com/jfe/form/SV_2tSF6UyK9zslBGt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Survey Link
              </a>
            </p>
            <Button onClick={handleSubmit}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
