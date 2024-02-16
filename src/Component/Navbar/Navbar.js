import React from "react";
import "./navbar.css";
import search from "../../Icons/icons8-search-50.png";
import profileImage from "../../Images/profileimg.webp";
import notification from "../../Icons/icons8-notification-50.png";

const Navbar = () => {
  return (
    <div className="MainNavbar">
      <div className="navContainer">
        <div className="navSearchItems">
          <img src={`${search}`} className="searchIcon" alt="" />
          <input type="search" className="searchBar" placeholder="Search" />
        </div>
        <div className="profileContainer">
          <img src={`${notification}`} alt="" className="notificationIcon" />
          <img src={`${profileImage}`} alt="" className="profileImage" />
          <p className="profileName">Odogwu</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
