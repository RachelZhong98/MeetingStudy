import React from "react";
import { useHistory } from "react-router-dom";
import firebase, { db } from "app/firebase/firebaseConfig";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form, Table } from "react-bootstrap";

const SurveyPage5 = () => {
  const history = useHistory();

  const handleSubmit = async (values) => {
    console.log(values);

    let id = localStorage.getItem("id");

    if (!id) return history.push("/");

    await db.collection("survey").doc(id).set(
      {
        page5: values,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    history.push("/survey-6");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="my-5 pt-5 w-100">
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
                  <Table className="mb-5" hover>
                    <thead className="bg-light">
                      <tr>
                        <th></th>
                        {q2optionList.map((item, ind) => (
                          <th className="text-center" key={item} align="center">
                            {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {q2List.map((question, ind) => (
                        <tr key={question}>
                          <td>{question}</td>
                          {q2optionList.map((option) => (
                            <td key={option} align="center">
                              <Form.Check
                                type="radio"
                                value={option}
                                onChange={handleChange}
                                name={`answer[${ind}]`}
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
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

const q2List = [
  "When I’m prompted about a software update, I install it right away.",
  "I try to make sure that the programs I use are up-to-date.",
  "I manually lock my computer screen when I step away from it.",
  "I set my computer screen to automatically lock if I don’t use it for a prolonged period of time.",
  "I use a password/passcode to unlock my laptop or tablet.",
  "If I discover a security problem, I continue what I was doing because I assume someone else will fix it.",
  "I verify that my anti-virus software has been regularly updating itself.",
  "I know what website I’m visiting based on its look and feel, rather than by looking at the URL bar.",
  "I use different passwords for different accounts that I have.",
  "I do not include special characters in my password if it’s not required.",
  "I submit information to websites without first verifying that it will be sent securely (e.g., SSL, “https://“, a lock icon).",
];

const q2optionList = [
  "Always",
  "Often",
  "Sometimes",
  "Rarely",
  "Never",
  "Unsure",
];

const fomrSchema = yup.object().shape({
  answer: yup.array().min(q2List.length).required("required"),
});

export default SurveyPage5;
