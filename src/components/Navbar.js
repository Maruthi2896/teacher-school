import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState("");
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClick1 = () => {
    setIcon(!icon);
  };

  return (
    <div>
      <nav>
        <a
          href="/"
          style={{
            color: "#fff",
            marginBottom: "10px",
            textDecoration: "none",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            <h1 onClick={() => handleClick1()}>DashBoard</h1>
          </NavLink>
        </a>

        <Drawer anchor={"left"} open={icon}>
          <ul
            id="navbar"
            className={clicked ? "#navbar active" : "#navbar"}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "230px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li>
              <NavLink style={{ color: "black" }} to="/">
                <CloseIcon
                  style={{ background: "grey" }}
                  onClick={() => handleClick1()}
                />
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: "black" }} to="/teachers">
                <h4 onClick={() => handleClick1()}>Teachers</h4>
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: "black" }} to="/students">
                <h4 onClick={() => handleClick1()}>Students</h4>
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: "black" }} to="/batches">
                <h4 onClick={() => handleClick1()}>Batches</h4>
              </NavLink>
            </li>
          </ul>
        </Drawer>

        <div id="mobile">
          <i
            id="bar"
            onClick={() => handleClick()}
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <NavLink
          to="/developer"
          style={{ textDecoration: "none", color: "white" }}
        >
          Developer
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
