import React from "react";
import "./rightbar.css";
import img1 from "../Images/img1.avif";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.webp";
import img6 from "../Images/img6.jpg";
import img7 from "../Images/img7.webp";

const Rightbar = () => {
  return (
    <div className="rightbarMainContainer">
      <div style={{ marginTop: "160px" }}>
        <div style={{ marginLeft: "6px", paddingTop: "30px" }}>
          <img src={`${img1}`} alt="" className="proImage" />
          <div className="dott"></div>
        </div>

        <div style={{ marginLeft: "6px", paddingTop: "30px" }}>
          <img src={`${img2}`} alt="" className="proImage" />
          <div className="dott"></div>
        </div>

        <div style={{ marginLeft: "6px", paddingTop: "30px" }}>
          <img src={`${img3}`} alt="" className="proImage" />
          <div className="dott"></div>
        </div>

        <div style={{ marginLeft: "6px", paddingTop: "30px" }}>
          <img src={`${img4}`} alt="" className="proImage" />
          <div className="dott"></div>
        </div>

        <div style={{ marginLeft: "6px", paddingTop: "30px" }}>
          <img src={`${img5}`} alt="" className="proImage" />
          <div className="dott"></div>
        </div>

        <div style={{ marginLeft: "6px", paddingTop: "30px" }}>
          <img src={`${img6}`} alt="" className="proImage" />
          <div className="dott"></div>
        </div>

        <div style={{ marginLeft: "6px", paddingTop: "30px" }}>
          <img src={`${img7}`} alt="" className="proImage" />
          <div className="dott"></div>
        </div>
      </div>
    </div>
  );
};
export default Rightbar;
