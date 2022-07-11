import "../styles/page.css";
import React, { useEffect } from "react";
import { db } from "app/firebase/firebaseConfig";
import { Button } from "react-bootstrap";

const Page = ({ closeDialog = () => {} }) => {
  let id = localStorage.getItem("id");

  useEffect(() => {
    let type = "";
    let stats = "";
    let statement = "";

    db.collection("ghostTrails")
      .where("id", "==", id)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let data = doc.data()["flash"];
          if (data !== "control") {
            stats = data[1];
            if (data[0] === "s") {
              type = "Here's what other users did: \n";
              statement = data[2];
            } else if (data[0] === "c") {
              type = "Here's what happened to other users: \n";
              statement = data[2];
            }
            console.log(type, " ", stats, " ", statement);

            document.getElementById("type-text").innerHTML = type;
            let statementtext = document.getElementById("statement-text");
            let statementHTML = `<u>${stats}</u> ${statement}`;
            statementtext.innerHTML = statementHTML;

            document.getElementById("ghostTrails").style.display =
              "inline-block";
            document.getElementById("block").style.height = "180px";
          }
        });
      });
  }, [id]);

  return (
    <div>
      <div className="navbar">
        <img className="nav-img" alt="nav-img" src="/assets/images/Word.png" />
        <h1 className="nav-title"> Fun News</h1>
        <a style={{ marginLeft: "100px" }} href="#home">
          Quizzes
        </a>
        <a href="#news">Videos</a>
        <a href="#contact">Animals</a>
        <a href="#contact">Celebrity</a>
        <a href="#contact">Shopping</a>
        <a href="#contact">Do better 2019</a>
        <div
          className="text-white ml-auto mr-3 cursor-pointer"
          onClick={closeDialog}
        >
          <i className="fa fa-close" style={{ fontSize: 18 }}></i>
        </div>
      </div>

      <div className="main">
        <div className="content">
          <h1 style={{ fontSize: 40 }}>
            True facts that will SHOCK you!{" "}
            <span style={{ color: "#2b2301" }}></span>
          </h1>
          <h2 style={{ fontSize: 15 }}>
            Note: You may choose to read the text version <u>OR</u> watch the
            video of your choice. Both content contains the same information.
          </h2>
          <br />
          <div className="content__block" id="block">
            <div style={{ padding: 20 }}>
              <b style={{ fontSize: 20, color: "red" }}>
                ALERT: Flash Agreement Detected!
              </b>
              <br />
              <p style={{ fontSize: 13 }}>
                Enabling Flash will allow you watch this video, but could also
                increase your chances of being infected with malware.
              </p>
              <div id="ghostTrails" style={{ display: "none" }}>
                <b id="type-text" style={{ fontSize: 13 }}></b>
                <ul>
                  <li style={{ display: "list-item", fontSize: 15 }}>
                    <b id="statement-text"></b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="code_block">
            <p>
              <param name="movie" value="shock.swf" />
            </p>
            <p>
              <embed
                src="/assets/images/shock.swf"
                name="shock"
                width="550"
                height="400"
              />
            </p>

            <div className="d-flex mb-4">
              <Button className="mr-3">Play</Button>
              <Button>Pause</Button>
            </div>
          </div>
          <span>Here's the text version:</span>
          <h2 style={{ color: "#2e6c80" }}>
            1. Snails Has 14000 Thousand Teeth.
            <br /> Yes! You seen that right, Snails!
          </h2>
          <br />
          <img
            src="/assets/images/snails.png"
            alt="snails"
            className="content__img"
          />
          <h2 style={{ color: "#2e6c80" }}>
            2. The Immortal Food - Honey <br />
            <br />
            Honey never goes off, not after one year, never two, never.
            Archigologies have often found pots of honey thousands of years that
            are yet still preserves. This food can last forever.
          </h2>
          <br />
          <img
            src="/assets/images/honey.png"
            alt="honey"
            className="content__img"
          />
          <h2 style={{ color: "#2e6c80" }}>
            {" "}
            3. Wonder Of Human Body -<br />
            <br />
            The human nose can remember 15000 difference scents. also human ears
            can differencitate millions of sounds and our eyes can discriminate
            thousand of colors!
          </h2>{" "}
          <br />
          <br />
          <img
            src="/assets/images/eyes.png"
            alt="eyes"
            className="content__img"
          />
          <h2 style={{ color: "#2e6c80" }}>
            {" "}
            4. The Immortal -<br />
            <br />
            The Turritopsis Nutricula jellyfish is biologically immortal. They
            can live forever! The only way they can die is to get consumed by
            other fish.{" "}
          </h2>
          <br />
          <img
            src="/assets/images/jellyfish.png"
            alt="jellyfish"
            className="content__img"
          />
          <h2 style={{ color: "#2e6c80" }}>
            {" "}
            5. The Biggest Heart On Earth -<br />
            <br />
            The heart of the blue whale is so massive that a human can swim
            through it's vein.
            <br />
            Also, blue whale is the largest animal that has ever lived. larger
            than the biggest dinosour.
          </h2>
          <br />
          <img
            src="/assets/images/whale.png"
            alt="whale"
            className="content__img"
          />
          <img
            src="/assets/images/whale2.png"
            alt="whale2"
            className="content__img"
          />
          <img
            src="/assets/images/wrinkle.png"
            alt="eyes"
            className="content__img"
          />
          <img
            src="/assets/images/wrinkle2.png"
            alt="eyes"
            className="content__img"
          />
          <h2 style={{ color: "#2e6c80" }}> 6. Just for kicks and giggles </h2>
          <img
            src="/assets/images/funfact.jpg"
            alt="eyes"
            style={{ width: 700, height: 500 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
