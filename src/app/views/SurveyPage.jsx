import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import firebase, { db } from "app/firebase/firebaseConfig";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form } from "react-bootstrap";
import { handleSurveyPageRoute } from "app/utils";

const SurveyPage = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleSubmit = async (values) => {
    console.log(values);

    let id = localStorage.getItem("id");

    if (!id) return history.push("/");

    await db.collection("survey").doc(id).set(
      {
        page1: values,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    if (values.answer.match(optionList[0])) {
      localStorage.clear();
      history.push("/thank-you");
    } else handleSurveyPageRoute(history, pathname);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <p className="pt-5 mt-5 mb-4">
            Thank you for your participation in this experiment. The goal of
            this study was to determine the effect of “Ghost Trails” on making
            security decisions.
            <br />
            <br />
            In this experiment, you were presented with choices on whether to
            save credit card info, run Flash on your browser, or accept cookies.
            Simultaneously, you were shown with a small card on screen with
            information about making those particular choices. These small cards
            were called Ghost Trails. We wanted to see if these Ghost Trails
            were helpful in you making a more informed decision about those
            choices. The Hollister purchase was not placed. We do not have
            access to any of your credit card information, and they have not
            been saved.
            <br />
            <br />
            Your participation is not only greatly appreciated by the
            researchers involved, but the data collected could possibly enhance
            the security world and prevent leaks, hacks from happening in this
            technological world.
            <br />
            <br />
            Now that you know the full purpose of the study, if you do not wish
            to have your data used in the study, please let us know. If you have
            any questions about this study, please contact us. Names and email
            addresses for all researchers, including supervisors are listed as
            follows:
            <br />
            <br />
            Researchers: <br />
            Ruinan (Nancy) Wang -- rwang391@gatech.edu
            <br />
            Yu-Cheng (Tony) Peng -- tony30337@gatech.edu
            <br />
            Yuxi Wu --yuxiwu@gatech.edu
            <br />
            <br />
            Supervisor:
            <br />
            Sauvik Das: sauvik@gatech.edu
            <br />
            <br />
            Finally, we urge you not to discuss this study with anyone else who
            is currently participating or might participate at a future point in
            time.
          </p>

          <div className="mb-4 w-100">
            <Formik
              initialValues={{}}
              validationSchema={fomrSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mt-2 mb-4">
                    <p>
                      Please indicate whether you would like to continue with
                      the rest of the survey:
                    </p>
                    {optionList.map((item, ind) => (
                      <Form.Check
                        id={`answer.${ind}`}
                        className="pb-2 d-flex align-items-center"
                        key={item}
                      >
                        <Form.Check.Input
                          className="mt-0"
                          name="answer"
                          type="radio"
                          value={item}
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="ml-2 cursor-pointer">
                          {item}
                        </Form.Check.Label>
                      </Form.Check>
                    ))}
                  </div>

                  <Button type="submit">Next</Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

const optionList = [
  "I do not wish to have my data used in the rest of this study and do not wish to continue.",
  "I consent to having my data used in the rest of this study and agree to continue.",
];

const fomrSchema = yup.object().shape({
  answer: yup.string().required("required"),
});

export default SurveyPage;
