import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <h2 className="text-center text-muted mb-5 p-5">People</h2>
      <div className="row">
        <div className="col-lg-6 col-sm-12 text-center">
          <img
            src="media/images/teamImage.jpg"
            style={{
              width: "250px",
              borderRadius: "100%",
            }}
            alt="team"
          ></img>
          <h5 className=" text-muted mt-3">Shresha Mathur</h5>
          <p className="text-muted mt-2">Founder</p>
        </div>
        <div className="col-lg-6 col-sm-12 mt-4 text-muted">
          <p>
            Shresha founded Nivesh in 2018 to overcome the hurdles she faced
            during her decade long stint as a trader. Today, Nivesh has changed
            the landscape of the Indian broking industry.
          </p>
          <p>
            She is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Playing badminton is her zen.</p>
          <p>
            Connect on{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Homepage
            </Link>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
