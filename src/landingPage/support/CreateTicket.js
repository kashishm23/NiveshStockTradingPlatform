import React from 'react'

function CreateTicket() {
  return (
 <div className="container ">
      <div className="row">
        <h1 className="fs-2 p-5 mb-5">
          To create a ticket,select a relevant topic
        </h1>
        <div className="col-4 ">
          <h4>
            <i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening
          </h4>

          <a href="" style={{ textDecoration: "none" }}>
            Resident individual
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Minor
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Non Resident Indian (NRI)
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Company, Partnership, HUF and LLP
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Glossary
          </a><br/>
        </div>
        <div className="col-4 ">
          <h4>
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>Your Nivesh
            Account
          </h4>
          <a href="" style={{ textDecoration: "none" }}>
            Your Profile{" "}
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Account modification
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Client Master Report (CMR) and Depository Participant (DP){" "}
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Nomination{" "}
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Transfer and conversion of securities{" "}
          </a><br/>
        </div>
        <div className="col-4">
          <h4>
            <i class="fa fa-line-chart" aria-hidden="true"></i>Funds
          </h4>
          <a href="" style={{ textDecoration: "none" }}>
            Add money
          </a><br/>
          <a href="" style={{ textDecoration: "none" }}>
            Withdraw money
          </a><br/>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
              Add bank accounts
            </a><br/>
            <a href="" style={{ textDecoration: "none" }}>
              eMandates
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket
