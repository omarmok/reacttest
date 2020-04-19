import React from "react";
import PleaseWait from "../PleaseWait/index";
import {
  StyledNavavbar,
  Navbarbrandimg,
  NavbarUl,
  NavbarUlItems,
  NavbarAnchor,
} from "./style.js";

function Navbar() {
  return (
    <StyledNavavbar className="navbar navbar-expand-lg shadow">
      <div className="navbar-brand">
        <Navbarbrandimg src={"../../images/logo192.png "} />
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavbarUl className="navbar-nav mr-auto">
          <NavbarUlItems className="nav-item ">
            <NavbarAnchor active href="/" className="nav-link ">
              الرئيسية
            </NavbarAnchor>
          </NavbarUlItems>
          <NavbarUlItems className="nav-item">
            <NavbarAnchor href="/contact" className="nav-link ">
              اتصل بنا
            </NavbarAnchor>
          </NavbarUlItems>
        </NavbarUl>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        تواصل معنا
      </button>
      <PleaseWait />
    </StyledNavavbar>
  );
}

export default Navbar;
