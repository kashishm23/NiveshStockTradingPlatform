import React from "react";

function Footer() {
  const linkStyle = { textDecoration: "none" };

  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.png"
              alt="Nivesh company logo"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2026-2036, Nivesh Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="/about" className="mb-1 text-muted" style={linkStyle}>About</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Philosophy</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Press & Media</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Careers</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Nivesh Cares (CSR)</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Nivesh.tech</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Open Source</a>
          </div>

          <div className="col">
            <p>Support</p>
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Contact Us</a><br />
            <a href="/support" className="mb-1 text-muted" style={linkStyle}>Support Portal</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>File a Complaint</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Complaint Status</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Bulletin</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Circulars</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>N-Connect Blog</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Downloads</a>
          </div>

          <div className="col">
            <p>Account</p>
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Open Demat Account</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Minor Account</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>NRI Account</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Commodity</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Dematerialisation</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Fund Transfer</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>MTF</a><br />
            <a href="/" className="mb-1 text-muted" style={linkStyle}>Referral Program</a>
          </div>
        </div>

        <div className="text-muted text-small mt-5 fs-6">
          <p>Regulatory and risk disclosure text remains unchanged…</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
