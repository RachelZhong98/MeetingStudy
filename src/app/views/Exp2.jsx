import PageTitle from "app/components/PageTitle";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Exp2Survey from "./Exp2Survey";
import Page from "./Page";

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
      <PageTitle title="Scenario: FUN NEWS">
        <p className="lead mb-5 text-black-50">
          For this task, we’d like you to either watch an informational video or
          read through the content of this web page.{" "}
          <strong>
            The video and the text content contain the same information.
          </strong>
          Once you are done, please close the window and return to this page.
          You will be asked a few questions about about what you watched and /
          or read. You will not be timed, however, please try to just read
          through the page just once. Ready?”
        </p>
        <br />
        <br />
        Ready?
        <br />
        <br />
        <br />
        <Button onClick={visitPage}>Take me to page!</Button>
        {disabled && (
          <Button className="mt-4 d-block" disabled>
            Next
          </Button>
        )}
      </PageTitle>

      {!disabled && <Exp2Survey />}

      <Modal
        show={show}
        onHide={closeDialog}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Body className="p-0">
          <Page closeDialog={closeDialog} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Exp2;
