import React from "react";
import Hero from "./Hero";
import LeftImageContent from "./LeftImageContent";
import RightImageContent from "./RightImageContent";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftImageContent
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImageContent
        productName="Console"
        productDescription="The central dashboard for your Nivesh account. Gain insights into your trades and investments with in-depth reports and visualisations.
        Explore Now and gain insights of the amazing dashboards for your account!!"
        learnMore=""
        imageURL="media/images/console.png"
      />
      <LeftImageContent
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImageContent
        productName=" Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
        imageURL="media/images/kiteconnect.png"
      />
      <LeftImageContent
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <h4 className="text-muted text-center p-5 mt-5">Want to know more about our technology stack? Check out the <a href="/" style={{textDecoration: "none"}}>Nivesh.tech</a> blog.</h4>
      <Universe />
    </>
  );
}

export default ProductsPage;
