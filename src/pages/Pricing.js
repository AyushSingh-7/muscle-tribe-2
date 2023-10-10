import React from "react";
import advance from "../assets/images/advance.png";
import basic from "../assets/images/basic.png";
import pro from "../assets/images/pro.png";

const Pricing = () => {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#FF2625",
          height: "54px",
          width: "100%",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "20px",
          marginTop: "45px",
        }}
      >
        Our pricing plan
      </div>
      <div>
        <div
          className="background-image"
          style={{
            display: "inline-flex",
            paddingTop: "100px",
            paddingLeft: "250px",
            backgroundImage: "../assets/images/pro.png",
          }}
        >
          <div
            style={{
              height: "410px",
              width: "250px",
              backgroundColor: "#edebeb",
              margin: "10px",
              textAlign: "center",
              color: "#FF2625",
            }}
          >
            <div className="price-tag-name">Startup</div>
            <img src={basic} className="pricing-iamge" alt="hero-banner" />
            <br />
            $ 45
            <br />
            Personl Trainer
            <br />
            Yoga
            <br />
            Body Building
            <br />
            Cycling
            <br />
            Fitness Grwoing
            <br />
            Weight Loss
            <br />
          </div>
          <div
            style={{
              height: "410px",
              width: "250px",
              backgroundColor: "#edebeb",
              margin: "10px",
              color: "#FF2625",
              textAlign: "center",
            }}
          >
            <div className="price-tag-name">Advanced</div>
            <img src={advance} className="pricing-iamge" alt="hero-banner" />
            <br />
            $ 45
            <br />
            Personl Trainer
            <br />
            Yoga
            <br />
            Body Building
            <br />
            Cycling
            <br />
            Fitness Grwoing
            <br />
            Weight Loss
            <br />
          </div>
          <div
            style={{
              height: "410px",
              width: "250px",
              backgroundColor: "#edebeb",
              margin: "10px",
              color: "#FF2625",
              textAlign: "center",
            }}
          >
            <div className="price-tag-name">Pro</div>
            <img src={pro} className="pricing-iamge" alt="hero-banner" />
            <br />
            $ 45
            <br />
            Personl Trainer
            <br />
            Yoga
            <br />
            Body Building
            <br />
            Cycling
            <br />
            Fitness Grwoing
            <br />
            Weight Loss
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
