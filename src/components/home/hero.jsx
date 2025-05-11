import React from "react";
import Banner from "../../assets/images/banner.png";

function hero() {
  return (
    <div>
      <p>
        <img src={Banner} alt="Hero" style={{ width: "100%", height: 500 }} />
      </p>
    </div>
  );
}

export default hero;
