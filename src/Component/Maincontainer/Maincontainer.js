import React from "react";
import "./maincontainer.css";
import Navbar from "../Navbar/Navbar";
import coverimage from "../../Images/background.jpg";
import Viking from "../../Images/viking2.webp";
import got from "../../Images/GOT.jpg";
import reacher from "../../Images/Reacher.jpg";
import wot from "../../Images/WOT.jpeg";
import unthinkable from "../../Images/unthinkable.jpg";
import peaky from "../../Images/peaky.jpg";
import blindspot from "../../Images/blindspot.jpg";
import poc from "../../Images/POC.webp";

const Maincontainer = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      <div>
        <img src={`${coverimage}`} className="coverImage" alt="" />
        <div className="itemContainer">
          <p className="title">The DarkKnight Rises</p>
          <p className="subtitle">98% Match</p>
          <div className="btnContainer">
            <button className="btnWatch">Watch Now</button>
            <div className="watchLater">
              <p className="plus">+</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="subMainTitle">Continue Watching</h4>
        <div
          style={{
            display: "flex",
            marginLeft: "60px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${Viking}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Watch Now</button>
          </div>

          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${got}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Watch Now</button>
          </div>

          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${peaky}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Watch Now</button>
          </div>

          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${reacher}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Watch Now</button>
          </div>

          {/* <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${unthinkable}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Watch Now</button>
          </div>

          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${wot}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Watch Now</button>
          </div> */}
        </div>
      </div>

      <div>
        <h4 className="subMainTitle">Recommended Movies</h4>
        <div
          style={{
            display: "flex",
            marginLeft: "60px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${unthinkable}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Buy Now....</button>
          </div>

          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${wot}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Buy Now....</button>
          </div>

          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${blindspot}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Buy Now....</button>
          </div>

          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${poc}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Buy Now....</button>
          </div>

          {/* <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${unthinkable}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Buy Now....</button>
          </div>

          <div className="movieContainer" style={{ marginTop: "10px" }}>
            <img src={`${wot}`} alt="" className="itemImage" />
            <button className="btnItemContainer">Watch Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Maincontainer;
