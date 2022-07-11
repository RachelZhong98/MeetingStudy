import PageTitle from "app/components/PageTitle";
import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ThinkAloud = () => {
  const history = useHistory();

  const handleSubmit = async () => {
    let id = localStorage.getItem("id");

    if (!id) {
      history.push("/");
      return;
    }

    let pageList = ["/exp1", "/exp2", "/exp3"];
    let pageNumber = Math.ceil(Math.random() * 100) % 3;

    history.push(pageList[pageNumber]);
  };

  return (
    <div>
      <PageTitle title="The Think Aloud Protocol" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h4 id="about">
              The lab assistant will explain the Think Aloud Protocol.
            </h4>
            <hr />
            <br />
            <Button onClick={handleSubmit}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkAloud;
