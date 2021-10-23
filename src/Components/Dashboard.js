import React, {} from "react";
import { FaClock, FaHistory, FaThumbsUp, FaYoutube } from "react-icons/fa";
import { MdHome, MdVideoLibrary } from "react-icons/md";
import {} from "react-icons/bi";
import { IoIosMic, IoIosSearch } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { BsBell } from "react-icons/bs";
import CardData from "./CardData";

function Dashboard() {
  
return (
    <>
      <div className="side-menu">
        <div className="logo-details">
          <FaYoutube className="logo" />
          <span className="logo-name">YouTube</span>
        </div>
        <ul>
          <li className="active">
            <MdHome className="icons"/>
            <span>&nbsp;Home</span>
          </li>
          <li>
            <MdVideoLibrary className="icons"/>
            <span>&nbsp;Library</span>
          </li>
          <li>
            <FaHistory className="icons"/>
            <span>&nbsp;History</span>
          </li>
          <li>
            <FaClock className="icons"/>
            <span>&nbsp;Watch Later</span>
          </li>
          <li>
            <FaThumbsUp className="icons"/>
            <span>&nbsp;Liked Videos</span>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <div className="nav">
            <div className="search">
              <input type="text" placeholder="search" />
              <button type="submit">
                <IoIosSearch />
              </button>
              <button type="submit" className="mic">
                <IoIosMic />
              </button>
            </div>
            <div className="user">
              <BiVideoPlus className="icons" />
              <CgMenuGridR className="icons" />
              <BsBell className="icons" />
              <div className="user-details">
                <img
                  src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg"
                  alt="yogesh"
                />
              </div>
            </div>
          </div>
        </div>
        <CardData />
      </div>
    </>
  );
}

export default Dashboard;
