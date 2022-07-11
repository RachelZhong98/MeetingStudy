import { db } from "app/firebase/firebaseConfig";
import React, { useEffect, useState } from "react";

const Exp3Content = ({ closeDialog = () => {} }) => {
  const [showCookie, setShowCookie] = useState(true);

  let id = localStorage.getItem("id");

  const hideCookieAlert = async () => {
    db.collection("mockResult")
      .where("id", "==", id.toString())
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          doc.ref.update({ cookie: true }).then(function (docRef) {
            console.log("Document updated with ID: ", docRef);
          });
        });
        setShowCookie(false);
      });
  };

  useEffect(() => {
    let type = "";
    let stats = "";
    let statement = "";

    db.collection("ghostTrails")
      .where("id", "==", id)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          var data = doc.data()["cookie"];
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
            var statementtext = document.getElementById("statement-text");
            var statementHTML = `<u>${stats}</u> ${statement}`;
            statementtext.innerHTML = statementHTML;

            document.getElementById("ghostTrails").style.display =
              "inline-block";
            document.getElementById("ghostTrailsDiv").style.height = "150px";
          }
        });
      });
  }, [id]);

  return (
    <div>
      {showCookie && (
        <nav
          id="cookies"
          className="navbar navbar-expand-md fixed-bottom"
          style={{ backgroundColor: "#5D5D5D", opacity: 0.95 }}
        >
          <div className="row w-100" style={{ margin: "5px" }}>
            <div className="col-md-5">
              <div
                style={{
                  float: "left",
                  marginLeft: "3%",
                  width: "100%",
                  height: "120px",
                }}
              >
                <b
                  style={{
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  We and our partners use technology such as cookies on our site
                  to personalise content and ads, provide social media features,
                  and analyse our traffic. Click below to consent to the use of
                  this technology across the web. You can change your mind and
                  change your consent choices at anytime by returning to this
                  site.
                </b>
              </div>
            </div>
            <div className="col-md-1">
              <div id="buttons" style={{ left: "20%", bottom: "50%" }}>
                <button
                  style={{
                    width: 100,
                  }}
                  onClick={hideCookieAlert}
                >
                  Accept
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div
                id="ghostTrailsDiv"
                style={{
                  float: "right",
                  backgroundColor: "#ffcccc",
                  height: 120,
                  width: "90%",
                }}
              >
                <div
                  style={{
                    padding: 20,
                  }}
                >
                  <b
                    style={{
                      fontSize: 20,
                      color: "red",
                    }}
                  >
                    ALERT: Cookie Agreement Detected!
                  </b>
                  <br />
                  <p
                    style={{
                      fontSize: 13,
                      color: "black",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Enabling cookies will enhance browsing experience, but you
                    are allowing them to track your browsing activites.
                  </p>
                  <div
                    id="ghostTrails"
                    style={{
                      display: "none",
                    }}
                  >
                    <b
                      id="type-text"
                      style={{
                        fontSize: 13,
                        color: "black",
                      }}
                    ></b>
                    <ul>
                      <li
                        style={{
                          display: "list-item",
                          fontSize: 15,
                          color: "black",
                        }}
                      >
                        <b id="statement-text"></b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Dailyfeed
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Bud Peterson..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <div
              className="text-white ml-3 cursor-pointer"
              onClick={closeDialog}
            >
              <i className="fa fa-close" style={{ fontSize: 18 }}></i>
            </div>
          </form>
        </div>
      </nav>

      <main role="main">
        <div className="jumbotron mt-4">
          <div className="container">
            <h1 className="display-3">Daily feed</h1>
            <p>Receive daily updates from news.</p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more &raquo;
              </a>
            </p>
          </div>
        </div>

        <div
          className="container"
          style={{
            marginBottom: "10rem",
          }}
        >
          <h1>iPhone X vs iPhone 11 comparison: Should you upgrade?</h1>
          <p className="mt-5">
            The iPhone 11 officially became available yesterday at Apple Stores
            around the world as well as other retailers. The iPhone 11 is the
            followup to the iPhone XR and it comes two years after the initial
            introduction of the iPhone X. This means there are likely many
            iPhone X users who are considering upgrading this year. Read on as
            we compare the iPhone X vs the iPhone 11. What’s important to note
            first and foremost is that the iPhone 11 isn’t necessarily the
            direct followup to the iPhone X, despite the naming. The iPhone X
            was succeeded by the iPhone XS, which is being succeeded by the
            iPhone 11 Pro this year. That’s not to say that the iPhone 11 isn’t
            a worthy successor to the iPhone X, because it certainly is.
          </p>
          <h4>iPhoneX vs iPhone11</h4>
          <p>
            The iPhone X is powered by Apple A11 Bionic processor, while the
            iPhone 11 packs the newer A13 Bionic processor. If you’re using an
            iPhone X, it likely hasn’t started to slow down at all, as the A11
            Bionic processor is incredibly powerful. If you’re looking for a
            speed boost, you might notice one going from the iPhone X to the
            iPhone 11, but it likely wouldn’t impact your day-to-day usage much
            at all. The biggest difference between the iPhone X and the iPhone
            11 is the display technology. The iPhone 11 features an LCD “Liquid
            Retina” panel with a 1792×828 resolution, whereas the iPhone X
            features an OLED display with a resolution of 2436×1125, for 458
            pixels-per-inch. Apple’s Liquid Retina display technology is quite
            advanced for an LCD panel, but if you’ve been using an iPhone X
            since 2017, you’ll likely notice a slight difference in color and
            brightness compared to the LCD panel of the iPhone 11. Something
            else worth noting is that the iPhone 11 features a 6.1-inch display,
            while the iPhone X features a 5.8-inch display. This means you’ll
            get a slightly larger display, but not one as large as the 6.5-inch
            display of the iPhone 11 Pro Max. For many people, the 6.1-inch
            iPhone 11 display has turned out to be the sweet spot of big, but
            not too big.
          </p>
          <img src="/assets/images/apple.png" width="100%" alt="apple" />
        </div>
      </main>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Web Study 2019
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Exp3Content;
