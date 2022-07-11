import { db } from "app/firebase/firebaseConfig";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  Modal,
  ModalBody,
} from "react-bootstrap";
import * as yup from "yup";
import "../styles/page-2.css";

const Page = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [isAlive, setIsAlive] = useState(true);

  const toggleDialog = async () => {
    setShowDialog((isOpen) => !isOpen);
  };

  const handleFormSubmit = async ({ email }, { resetForm }) => {
    await db.collection("subscription").doc(email).set({
      email,
    });

    resetForm();
    toggleDialog();
  };

  useEffect(() => {
    setTimeout(() => {
      if (isAlive) setShowDialog(true);
    }, 500);

    return () => setIsAlive(false);
  }, [isAlive]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between py-3 px-4">
        <img src="/assets/images/ShareNetwork.svg" width="24px" alt="share" />
        <div className="d-flex align-items-center">
          <h1 className="m-0 text-uppercase title">cuteplush</h1>
          <img src="/assets/images/MoonStars.svg" width="32px" alt="moon" />
        </div>
        <img src="/assets/images/ShoppingBag.svg" width="24px" alt="mail" />
      </div>
      <hr className="m-0" />
      <div className="py-4 container">
        <div className="d-flex justify-content-center align-items-center py-4 px-4 mb-4 page-title">
          <img
            src="/assets/images/Sun.svg"
            width="32px"
            alt="sun"
            style={{ marginRight: "0.5rem" }}
          />
          <h1 className="m-0 text-uppercase title">
            Grand Opening - August 18th
          </h1>
          <img src="/assets/images/Sun.svg" width="32px" alt="sun" />
        </div>

        <div className="row align-items-center">
          <div className="col-sm-6">
            <p className="description mb-4">
              Cuteplush is a site dedicated to bringing cute stuffed animals
              everywhere! We believe that having a plush friend is always a
              great way to bring a smile to your face.
              <br />
              <br />
              Currently, we are preparing for our grand store opening. Our site
              and shop are a work in progress.
              <br />
              <br />
              We have partnered with Amazon to give out $10 Amazon gift cards to
              everyone who signs up for our newsletter! The newsletter will keep
              you update on shop information and when our grand opening is
              happening. You’ll also find coupon codes and other discounts in
              the emails as well.
              <br />
              <br />
              Thank you for stopping by and we hope to see you back when
              Cuteplush opens!
            </p>

            <Button
              className="py-3 px-4 mb-4 signup-button"
              onClick={toggleDialog}
              type="button"
            >
              <h1 className="m-0 text-uppercase">
                I want a gift card - sign me up!
              </h1>
            </Button>
          </div>
          <div className="col-sm-6">
            <div className="w-100 d-flex justify-content-center">
              <img
                className="dino-image"
                src="/assets/images/image 1.png"
                width="100%"
                alt="dall"
              />
            </div>

            <p className="mt-4 text-center">Dino plushie - coming soon!</p>
          </div>
        </div>
      </div>

      <Modal
        show={showDialog}
        centered
        backdropClassName="inner-backdrop"
        className="inner-modal"
        onHide={toggleDialog}
      >
        <ModalBody>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div> </div>
            <div className="d-flex align-items-center">
              <h1 className="m-0 text-uppercase title">cuteplush</h1>
              <img src="/assets/images/MoonStars.svg" width="32px" alt="moon" />
            </div>
            <h5
              className="text-right text-muted cursor-pointer"
              onClick={toggleDialog}
            >
              <i className="fa fa-close"></i>
            </h5>
          </div>

          <p className="mx-auto text-center mb-4" style={{ maxWidth: 360 }}>
            Don’t miss out on the latest shop updates from us. Sign up for our
            newsletter to received a $10 Amazon gift card extra discount codes,
            plus a special offer during our grand opening!
          </p>

          <Formik
            initialValues={{}}
            validationSchema={fomrSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              isValid,
              dirty,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormGroup
                  controlId="email-signup"
                  className="mx-auto mb-3"
                  style={{ maxWidth: 400 }}
                >
                  <FormControl
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.email}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.email}
                  </FormControl.Feedback>
                </FormGroup>

                <div className="text-center">
                  <Button
                    className="signup-button"
                    style={{ maxWidth: 300 }}
                    disabled={!(dirty && isValid) || isSubmitting}
                    type="submit"
                  >
                    <h1 className="m-0 text-uppercase">Sign Up</h1>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  );
};

const fomrSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
});

export default Page;
