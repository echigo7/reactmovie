import React from "react";
import "./leftbar.css";
import search from "../../Icons/icons8-search-50.png";
import Watchlist from "../../Icons/icons8-heart-50.png";
import Comingsoon from "../../Icons/icons8-calendar-50.png";
import Friends from "../../Icons/icons8-add-friend-58.png";
import Parties from "../../Icons/icons8-group-of-people-50.png";
import Setting from "../../Icons/icons8-setting-50.png";
import Logout from "../../Icons/icons8-logout-50.png";
import child from "../../Images/child.jpg";

const Leftbar = () => {
  return (
    <div className="leftbarMainContainer">
      <h2 className="logoname">
        Madan<span className="logo">.</span>
      </h2>
      <div>
        <p className="menu">Menu</p>
        <ul>
          <li>
            <img src={`${search}`} className="listicons" alt="" />
            <p className="iListname">Browse</p>
          </li>
          <li>
            <img src={`${Watchlist}`} className="listicons" alt="" />
            <p className="iListname">Watchlist</p>
          </li>
          <li>
            <img src={`${Comingsoon}`} className="listicons" alt="" />
            <p className="iListname">Coming soon</p>
          </li>
        </ul>
      </div>

      <div>
        <p className="menu">Social</p>
        <ul>
          <li>
            <img src={`${Friends}`} className="listicons" alt="" />
            <p className="iListname">Friends</p>
          </li>
          <li>
            <img src={`${Parties}`} className="listicons" alt="" />
            <p className="iListname">Parties</p>
          </li>
        </ul>
      </div>

      <div>
        <p className="menu">General</p>
        <ul>
          <li>
            <img src={`${Setting}`} className="listicons" alt="" />
            <p className="iListname">Setting</p>
          </li>
          <li>
            <img src={`${Logout}`} className="listicons" alt="" />
            <p className="iListname">Logout</p>
          </li>
        </ul>
      </div>

      <div className="leftbarlastdiv">
        <img src={`${child}`} className="lastimage" alt="" />
        <p className="popcorn">Popcorn Addict</p>
        <p className="viewingtime">5/6h Viewing time</p>
        <button className="btnchallenges">Challenges</button>
      </div>
    </div>
  );
};
export default Leftbar;
