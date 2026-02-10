import React from "react";

function Universe() {
  return (
    <div className="container  mt-5">
      <div className="row text-center">
        <h3> The Nivesh Universe</h3>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="smallcaseimage" />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png" alt="streaklogoimage"
            style={{ width: "188.5px", height: "45px" }}
          />
          <p className="text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            stategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg" alt="sensibullimage"
            style={{ width: "188.5px", height: "45px" }}
          />
          <p className="text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5 mb-3">
          <img src="media/images/tijori-logo.png" alt="tijoriimage" />
          <p className="text-muted text-small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 mb-3">
          <img
            src="media/images/streakLogo.png" alt="streakimage"
            style={{ width: "188.5px", height: "45px" }}
          />
          <p className="text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            stategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 mb-3">
          <img
            src="media/images/dittoLogo.png" alt="dittoimage"
            style={{ width: "188.5px", height: "35px" }}
          />
           <p className="text-muted text-small">Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
