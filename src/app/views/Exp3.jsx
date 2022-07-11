import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "app/components/PageTitle";
import Exp3Content from "./Exp3Content";
import Exp3Survey from "./Exp3Survey";

const Exp2 = () => {
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const visitPage = async () => {
    setDisabled(false);
    setShow(true);
  };

  const closeDialog = async () => {
    setShow(false);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <PageTitle title="Scenario: Daily feed">
        <p className="lead mb-5 text-black-50">
          For this task, we’d like you to read an article from a specific web
          page and answers a few questions on it.
        </p>
        Ready?
        <br />
        <br />
        <Button onClick={visitPage}>Take me to page!</Button>
        {disabled && (
          <Button className="mt-4 d-block" disabled>
            Next
          </Button>
        )}
      </PageTitle>

      {!disabled && <Exp3Survey />}

      <Modal
        show={show}
        onHide={closeDialog}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Body className="p-0">
          <Exp3Content closeDialog={closeDialog} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Exp2;
