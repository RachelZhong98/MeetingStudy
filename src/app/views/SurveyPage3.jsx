import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import firebase, { db } from "app/firebase/firebaseConfig";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form } from "react-bootstrap";
import { handleSurveyPageRoute } from "app/utils";

const SurveyPage3 = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleSubmit = async (values) => {
    console.log(values);

    let id = localStorage.getItem("id");

    if (!id) return history.push("/");

    await db.collection("survey").doc(id).set(
      {
        page4: values,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    handleSurveyPageRoute(history, pathname);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="mt-5 pt-5 mb-5 w-100">
            <Formik
              initialValues={{}}
              validationSchema={fomrSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mt-2 mb-5">
                    <div className="mb-3">
                      <Form.Label>
                        When reading the article about the iPhone 11 from the
                        Daily Feed website, did you choose to accept cookies?
                      </Form.Label>
                      {q1OptionList.map((item, ind) => (
                        <Form.Check
                          id={`answer1.${ind}`}
                          className="pb-2 d-flex align-items-center"
                          key={item}
                        >
                          <Form.Check.Input
                            className="mt-0"
                            name="answer1"
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

                    <Form.Label>Why or why not?</Form.Label>
                    <Form.Control
                      className="mb-3"
                      name="answer1Reason"
                      as="textarea"
                      rows={4}
                      onChange={handleChange}
                    />

                    <div className="mb-3">
                      <Form.Label>
                        How sure were you in making that decision?
                      </Form.Label>
                      {q2optionList.map((item, ind) => (
                        <Form.Check
                          id={`answer2.${ind}`}
                          className="pb-2 d-flex align-items-center"
                          key={item}
                        >
                          <Form.Check.Input
                            className="mt-0"
                            name="answer2"
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

                    <div className="mb-3">
                      <Form.Label>
                        Did Ghost Trails play a part in your decision?
                      </Form.Label>
                      {["Yes", "No"].map((item, ind) => (
                        <Form.Check
                          id={`answer3.${ind}`}
                          className="pb-2 d-flex align-items-center"
                          key={item}
                        >
                          <Form.Check.Input
                            className="mt-0"
                            name="answer3"
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

                    <Form.Label>Why or why not?</Form.Label>
                    <Form.Control
                      name="answer3Reason"
                      as="textarea"
                      rows={4}
                      onChange={handleChange}
                    />
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

const q1OptionList = [
  "I do not wish to have my data used in the rest of this study and do not wish to continue.",
  "I consent to having my data used in the rest of this study and agree to continue.",
];

const q2optionList = [
  "Strongly agree",
  "Agree",
  "Somewhat agree",
  "Neither agreenor disagree",
  "Somewhat disagree",
  "Disagree",
  "Strongly disagree",
];

const fomrSchema = yup.object().shape({
  answer1: yup.string().required(),
  answer1Reason: yup.string().required(),
  answer2: yup.string().required(),
  answer3: yup.string().required(),
  answer3Reason: yup.string().required(),
});

export default SurveyPage3;
