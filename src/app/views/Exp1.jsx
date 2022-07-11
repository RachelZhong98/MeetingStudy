import PageTitle from "app/components/PageTitle";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Exp1Survey from "./Exp1Survey";
import Page2 from "./Page2";

const Exp1 = () => {
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);

  const visitPage = async () => {
    setDisabled(false);
    toggleDialog();
  };

  const toggleDialog = async () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div>
      <PageTitle title="Scenario: Checkout Experience">
        <p className="lead mb-5 text-black-50">
          For your first task, we’d like you to purchase a item on the Holister
          website. Specific instructions below.
          <br />
          <br />
          1. Please create a account on the Holister's website. (Join Cali Club)
          <br />
          2. Once registered and signed in, you can either purchase a men's
          jeans or a women's jeans of your choice.
          <br />
          We will reimburse you the cost so no worries on the price.
          <br />
          3. Once you see the purchase complete page, please return to this
          screen.”
        </p>
        <br />
        <br />
        <Button onClick={visitPage}>Let's shop at Holister!</Button>
        {disabled && (
          <Button className="mt-4 d-block" disabled>
            Next
          </Button>
        )}
      </PageTitle>

      <Modal
        show={open}
        dialogClassName="modal-90w"
        centered
        onHide={toggleDialog}
      >
        <Page2 />
      </Modal>

      {!disabled && <Exp1Survey />}
    </div>
  );
};

export default Exp1;
