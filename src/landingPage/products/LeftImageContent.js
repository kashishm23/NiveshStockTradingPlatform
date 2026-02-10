import React from "react";

function LeftImageContent({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return(
  <div className="container mt-5">
    <div className="row">
<div className="col-lg-6 col-sm-12">
<img src={imageURL} alt="imgurl"/>
</div>
<div className="col-lg-6 col-sm-12 p-5 mt-5">
<h1>{productName}</h1>
<p>{productDescription}</p>
<div>
<a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
<a href={learnMore} style={{marginLeft:"50px" ,textDecoration: "none"}}>Learn More<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>
<div className="mt-3  ">
<a href={googlePlay} ><img src="media/images/
googlePlayBadge.svg" alt="googleimg"/></a>
<a href={appStore}><img src="media/images/appstoreBadge.svg" alt="app logo"/></a>
</div>
</div>
    </div>
  </div>
  ) 
}

export default LeftImageContent;

