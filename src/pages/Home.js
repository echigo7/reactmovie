import React from "react";
import "./home.css";
import Leftbar from "../Component/Leftbar/Leftbar";
import Rightbar from "../Component/Rightbar";
import Maincontainer from "../Component/Maincontainer/Maincontainer";

export default function Home() {
  return (
    <div className="mainContainerForHome">
      <Leftbar />
      <Maincontainer />
      <Rightbar />
    </div>
  );
}
