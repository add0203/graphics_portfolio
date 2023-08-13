import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import hamburgerMenu from "../../assets/image/gg_menu-grid-o.png";

const Navbar = () => {
  //
  const { pathname } = useLocation();
  // using usestate for the color change in the scroll effect
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // set true when window size is small for mobile
  const currentUser = {
    id: 1,
    userName: "Add",
    isSeller: true,
  };

  return (
    // Navbar Active denote that its in Scrool active so the css used
    // for nave bar is {navbar active} and in case of not active only the navbar will be used

    <div className={active || pathname !== "/" ? "Navbar active" : "Navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Add.dev</span>
          </Link>
        </div>
        <div className="link">
          <Link className="link" to="/">
            <span>About</span>
          </Link>
          <Link className="link" to="/work">
            <span>Work</span>
          </Link>
          <Link className="link" to="/contact">
            <span>Contact</span>
          </Link>
          <Link className="link" to="/services">
            <span>Services</span>
          </Link>
          <Link className="link" to="/review">
            <span>Review</span>
          </Link>
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={hamburgerMenu} alt=""></img>
              {/* <span>🍔</span> */}
              {open && (
                <div className="options">
                  <Link className="link" to="/about">
                    About
                  </Link>
                  <Link className="link" to="/work">
                    Work
                  </Link>
                  <Link className="link" to="/contact">
                    Contact
                  </Link>
                  <Link className="link" to="/services">
                    <span>Services</span>
                  </Link>
                  <Link className="link" to="/review">
                    {" "}
                    <span>Review</span>
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )} */}
    </div>
  );
};

export default Navbar;
