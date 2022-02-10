import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

import("./navbar.css");

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            className="logo"
            src="https://i.ibb.co/yyhVzZ7/logo.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <Link to="/" className="link">
            <span>New and Popular</span>
          </Link>
          <Link to="/" className="link">
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            className="navbarImg"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFEGf7FqyFMsA/profile-displayphoto-shrink_800_800/0/1637518357355?e=1648080000&v=beta&t=PF2QQUB-V7uaJcKAGf-iynfgTM47TxCp8OsJhrZ1VUo"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
