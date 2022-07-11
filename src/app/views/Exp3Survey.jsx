import React from "react";
// import PageTitle from "app/components/PageTitle";
import { useHistory } from "react-router-dom";
import firebase, { db } from "app/firebase/firebaseConfig";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form, Table } from "react-bootstrap";
import { updateCompletedSurveyList } from "app/utils";

const Exp3Survey = () => {
  const history = useHistory();

  const handleSubmit = async (values) => {
    let id = localStorage.getItem("id");

    if (!id) return history.push("/");

    await db.collection("survey").doc(id).set(
      {
        dailyFeedEvaluation: values,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    updateCompletedSurveyList(history, "exp3");
  };

  return (
    <div>
      {/* <PageTitle title="Daily Feed Evaluation">
        <p className="lead mb-5 text-black-50">
          Here are some questions for you to evaluate the Daily Feed webpage.
        </p>
      </PageTitle> */}

      <div className="container">
        <div className="row">
          <div className="mb-5 w-100">
            <p>
              Please answer the following True/False questions about the article
              you just read.
            </p>

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
                        <th className="text-center" align="center">
                          True
                        </th>
                        <th className="text-center" align="center">
                          False
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {q1List.map((question, ind) => (
                        <tr key={question}>
                          <td>{question}</td>
                          {["true", "false"].map((option) => (
                            <td
                              className="text-center"
                              align="center"
                              key={option}
                            >
                              <Form.Check
                                // name={question}
                                type="radio"
                                value={option}
                                name={`answer1.${ind}`}
                                onChange={handleChange}
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>

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
                                // name={question}
                                type="radio"
                                value={option}
                                onChange={handleChange}
                                name={`answer2[${ind}]`}
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

const q1List = [
  "The iPhone X is no longer being sold.",
  "The iPhone 11 has 3D Touch capabilities.",
  "The iPhone 11 is more expensive than the iPhone XR.",
  "The iPhone 11 is the successor to the iPhone X.",
  "The iPhone 11 has an LCD display.",
];

const q2List = [
  "I felt very confident using the Daily Feed website.",
  "I enjoyed using the Daily Feed website.",
  "I thought there was too much inconsistency in the Daily Feed website.",
  "I found the Daily Feed website unnecessarily complex.",
  "I believe most people would be comfortable navigating around the Daily Feed website.",
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
  answer1: yup.array().of(yup.string()).min(q1List.length).required("required"),
  answer2: yup.array().min(q2List.length).required("required"),
});

export default Exp3Survey;
