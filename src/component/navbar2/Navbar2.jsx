import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import hamburgerMenu from "../../assets/image/gg_menu-grid-o.png";
import "./Navbar2.scss";

const Navbar2 = () => {
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
    <div className={active || pathname !== "/" ? "Navbar active" : "Navbar"}>
      <div className="right">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="text">Add.dev</span>
          </Link>
        </div>
      </div>
      <div className="left">
        <Link to="/work" className="nav-link">
          <span className="text">Work</span>
        </Link>
        <Link to="/contact" className="nav-link">
          <span className="text">Contact</span>
        </Link>
        <Link to="/services" className="nav-link">
          <span className="text">Services</span>
        </Link>
        <Link to="/review" className="nav-link">
          <span className="text">Review</span>
        </Link>
      </div>
      <div className="ham-menu">
        <div className="user" onClick={() => setOpen(!open)}>
          <img src={hamburgerMenu} alt=""></img>
          {open && (
            <div className="options">
              <Link className="link" to="/">
                Home
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
                <span>Review</span>
              </Link>
              <Link className="link" to="/messages">
                Messages
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
