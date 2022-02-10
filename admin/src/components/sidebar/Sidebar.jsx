import { Link } from "react-router-dom";
import {
  LineStyle,
  PersonOutline,
  Storefront,
  MailOutline,
  WorkOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Timeline,
  Report,
} from "@mui/icons-material";
import "./sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("");

  const hoverSide = (event) => {
    //event.preventDefault(); when I use it Link is not working
    let nameOfItem = event.target.getAttribute("name");
    setActive(nameOfItem);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={
                  "sidebarListItem" + (active === "home" ? " active" : "")
                }
                name="home"
                onClick={hoverSide}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li
                className={
                  "sidebarListItem" + (active === "users" ? " active" : "")
                }
                name="users"
                onClick={hoverSide}
              >
                <PersonOutline className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className={
                  "sidebarListItem" + (active === "movies" ? " active" : "")
                }
                name="movies"
                onClick={hoverSide}
              >
                <Storefront className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className={
                  "sidebarListItem" + (active === "list" ? " active" : "")
                }
                name="list"
                onClick={hoverSide}
              >
                <Storefront className="sidebarIcon" />
                List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li
              className={
                "sidebarListItem" + (active === "mail" ? " active" : "")
              }
              name="mail"
              onClick={hoverSide}
            >
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li
              className={
                "sidebarListItem" + (active === "feedback" ? " active" : "")
              }
              name="feedback"
              onClick={hoverSide}
            >
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li
              className={
                "sidebarListItem" + (active === "messages" ? " active" : "")
              }
              name="messages"
              onClick={hoverSide}
            >
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              className={
                "sidebarListItem" + (active === "manage" ? " active" : "")
              }
              name="manage"
              onClick={hoverSide}
            >
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li
              className={
                "sidebarListItem" + (active === "analytics" ? " active" : "")
              }
              name="analytics"
              onClick={hoverSide}
            >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li
              className={
                "sidebarListItem" + (active === "reports" ? " active" : "")
              }
              name="reports"
              onClick={hoverSide}
            >
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
