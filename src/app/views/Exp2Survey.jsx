import React from "react";
// import PageTitle from "app/components/PageTitle";
import { useHistory } from "react-router-dom";
import firebase, { db } from "app/firebase/firebaseConfig";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form, Table } from "react-bootstrap";
import { updateCompletedSurveyList } from "app/utils";

const Exp2Survey = () => {
  const history = useHistory();

  const handleSubmit = async (values) => {
    console.log(values);

    let id = localStorage.getItem("id");

    if (!id) return history.push("/");

    await db.collection("survey").doc(id).set(
      {
        funNews: values,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    updateCompletedSurveyList(history, "exp2");
  };

  return (
    <div>
      {/* <PageTitle title="Web Study NEWS Evaluation">
        <p className="lead mb-5 text-black-50">
          Let's see how well you've remember the information. Don't worry, this
          will not be graded and will not affect your GPA.
        </p>
      </PageTitle> */}

      <div className="container">
        <div className="row">
          <div className="mb-5 w-100">
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
                    <p>
                      Which of the following facts were included in the reading
                      assigned to you? Choose all that apply.{" "}
                    </p>
                    {q1List.map((item, ind) => (
                      <Form.Check
                        id={`answer1.${ind}`}
                        className="py-3 d-flex align-items-center"
                        key={item}
                      >
                        <Form.Check.Input
                          className="mt-0"
                          name="answer1"
                          type="checkbox"
                          value={item}
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="ml-2 cursor-pointer">
                          {item}
                        </Form.Check.Label>
                      </Form.Check>
                    ))}
                  </div>

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
  "A crocodile can't poke its tongue out.",
  "95 percent of people text things they could never say in person.",
  "Avocados are poisonous to birds.",
  "Reading in the dark doesn't actually harm your eyesight.",
  "It would take a sloth one month to travel one mile.",
  "The world's oldest piece of chewing gum is over 9000 years old!",
  "The Earth has traveled more than 5000 miles in the past 5 minutes.",
  "Honey is a food that will never expire.",
  "Oxford University is older than the Aztec Civilization.",
  "There are more lifeforms living on your skin than there are people on the planet.",
];

const q2List = [
  "I felt very confident using the Fun News  website.",
  "I enjoyed using the Fun News  website.",
  "I thought there was too much inconsistency in the Fun News  website.",
  "I found the Fun News  website unnecessarily complex.",
  "I believe most people would be comfortable navigating around the Fun News  website.",
];

const q2optionList = [
  "Strongly agree",
  "Agree",
  "Somewhat agree",
  "Neither agreenor disagree",
  "Somewhat disagree",
  "Disagree",
  "Strongly disagree",
  "Unsure",
];

const fomrSchema = yup.object().shape({
  answer1: yup.array().min(1).required("required"),
  answer2: yup.array().min(q2List.length).required("required"),
});

export default Exp2Survey;
