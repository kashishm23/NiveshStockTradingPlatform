import React from "react";

function RightImageContent({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container mt-5 p-5">
      <div className="row ">
        <div className="col-lg-6 col-sm-12 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{textDecoration: "none"}}>Learn more<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
         <div className="col-lg-6 col-sm-12">
        <img src={imageURL}/>
        </div>
      </div>
    </div>
  );
}

export default RightImageContent;
