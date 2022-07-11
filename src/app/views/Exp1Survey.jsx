import React from "react";
import { useHistory } from "react-router-dom";
// import firebase, { db } from "app/firebase/firebaseConfig";
import { updateCompletedSurveyList } from "app/utils";

const Exp1Survey = () => {
  const history = useHistory();

  const handleSubmit = async (values) => {
    console.log(values);

    let id = localStorage.getItem("id");

    if (!id) return history.push("/");

    // await db.collection("survey").doc(id).set(
    //   {
    //     funNews: values,
    //     time: firebase.firestore.FieldValue.serverTimestamp(),
    //   },
    //   { merge: true }
    // );

    updateCompletedSurveyList(history, "exp1");
  };

  return (
    <div>
      {/* <PageTitle title="Checkout Experience Evaluation">
        <p className="lead mb-5 text-black-50">
          Please answer the following questions about your experience with
          creating an account and purchasing an item with Hollister
        </p>
      </PageTitle> */}

      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <br />
            <br />
            <p>Please go to the survey page and fill out the questionare.</p>
            <br />
            <br />
            <br />
            <br />
            <button
              className="btn btn-primary"
              type="submit"
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

export default Exp1Survey;
