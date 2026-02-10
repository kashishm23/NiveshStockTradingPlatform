import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgb(56,126,209)", color: "white" }}
    >
      <div className="row text-center">
        <div className="col-6 fs-2 p-5">
          <h6>Support Portal</h6>
        </div>
        <div className="col-6 fs-2 p-5">
          <a href="" style={{ color: "white" }}>
            <h6>Track Tricks</h6>
          </a>
        </div>
      </div>

      <div className="row p-5">
        <div className="col-6 fs-2 p-3 text-center">
          <h5>Search for an answer or browse help topics to create a ticket</h5>
          <button
            className="fs-6 p-3 m-3 rounded"
            style={{ backgroundColor: "white", color: "black", border: "none" }}
          >
            Eg: how do i activate F&O,why is my order getting rejected.
          </button>
          <br/>
          <a href="" className="fs-6" style={{ color: "white" }}>
            Track account opening
          </a> &nbsp;
          <a href="" className="fs-6"  style={{ color: "white" }}>
            Track segment activation
          </a>&nbsp;
          <a href="" className="fs-6"  style={{ color: "white" }}>
            Intraday.
          </a>&nbsp;
          <a href="" className="fs-6"  style={{ color: "white" }}>
            margins
          </a>&nbsp;
          <a href="" className="fs-6"  style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>

        <div className="col-6 fs-2 p-3 text-center">
          <h5>Featured</h5>
              <a href="" className="fs-6"  style={{ color: "white" }}>1. current Takeovers and Delisting-January 2024</a><br/>
              <a href="" className="fs-6"  style={{ color: "white" }}>2. Latest Intraday leverages- MIS & CO</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
