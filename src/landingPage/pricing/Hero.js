import React from "react";
function Hero() {
  return (
    <div className="container">
      <div
        className="row p-5 mt-5 border-bottom fs-6 text-center "
      >
        <h1>Pricing</h1>
        <p className="mt-4 text-muted">
          Free equity investments and flat ₹20 traday and F&O trades.
        </p>
      </div>
      <div className="row p-5 mt-5 border-bottom fs-6 text-center ">
        <div className="col-4 p-3 mt-5 mb-3">
          <img src="media/images/pricing0.svg" alt="image" />
          <h2>Free equity delivery</h2>
          <p className="text-muted text-small">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4 p-3 mt-5 mb-3">
          <img src="media/images/pricing20.svg" alt="pricingimage" />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted text-small">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 mb-3">
          <img src="media/images/pricingEquity.svg" alt="pricingimage"/>
          <h2>Free direct MF</h2>
          <p className="text-muted text-small">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
