import React from "react";
import { useHistory } from "react-router-dom";
import firebase, { db } from "app/firebase/firebaseConfig";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form } from "react-bootstrap";

const SurveyPage6 = () => {
  const history = useHistory();

  const handleSubmit = async (values) => {
    console.log(values);

    let id = localStorage.getItem("id");

    if (!id) return history.push("/");

    await db.collection("survey").doc(id).set(
      {
        page6: values,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    localStorage.clear();
    history.push("/thank-you");
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
                  <div className="mt-2 mb-5">
                    {questionList.map((question, ind) => (
                      <div className="mb-3" key={question.name}>
                        <Form.Label>
                          {ind + 1}. {question.question}
                        </Form.Label>
                        {question.options.map((item, ind) => (
                          <Form.Check
                            id={`${question.name}.${ind}`}
                            className="pb-2 d-flex align-items-center"
                            key={item}
                          >
                            <Form.Check.Input
                              className="mt-0"
                              name={question.name}
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
                    ))}
                  </div>
                  <Button type="submit">Finish</Button>
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
  "18 - 24",
  "25 - 34",
  "35 - 44",
  "45 - 54",
  "55 - 64",
  "65 or older",
];

const q2OptionList = [
  "Male",
  "Female",
  "Non-binary",
  "Other",
  "Prefer not to say",
];

const q3OptionList = [
  "White",
  "Black or African-American",
  "American Indian or Alaskan Native",
  "Asian",
  "Native Hawaiian or Pacific islander",
  "Other:",
  "Prefer not to say",
];

const q4OptionList = [
  "Married",
  "Widowed",
  "Divorced",
  "Separated",
  "Never married",
  "Prefer not to say",
];

const q5OptionList = [
  "Less than high school",
  "High school graduate",
  "Some college",
  "Associate degree",
  "Bachelor's degree",
  "Professional degree",
  "Doctorate",
  "Prefer not to say",
];

const q6OptionList = [
  "Employed full-time",
  "Employed part-time",
  "Unemployed looking for work",
  "Unemployed not looking for work",
  "Retired",
  "Student",
  "Disabled",
  "Prefer not to say",
];

const q7OptionList = ["Yes", "No"];

const questionList = [
  {
    question: "What is your age?",
    options: q1OptionList,
    name: "answer1",
  },
  {
    question: "What is your gender?",
    options: q2OptionList,
    name: "answer2",
  },
  {
    question: "What is your race?",
    options: q3OptionList,
    name: "answer3",
  },
  {
    question: "What is your marital status?",
    options: q4OptionList,
    name: "answer4",
  },
  {
    question: "What is the highest level of education you have completed?",
    options: q5OptionList,
    name: "answer5",
  },
  {
    question: "What is your employment status?",
    options: q6OptionList,
    name: "answer6",
  },
  {
    question:
      "Do you have formal education (Bachelor's degree or higher) in computer science, information technology, or a related field?",
    options: q7OptionList,
    name: "answer7",
  },
  {
    question:
      "Do you have a job in computer science, information technology, or a related field?",
    options: q7OptionList,
    name: "answer8",
  },
];

const fomrSchema = yup.object().shape({
  answer1: yup.string().required(),
  answer2: yup.string().required(),
  answer3: yup.string().required(),
  answer4: yup.string().required(),
  answer5: yup.string().required(),
  answer6: yup.string().required(),
  answer7: yup.string().required(),
  answer8: yup.string().required(),
});

export default SurveyPage6;
