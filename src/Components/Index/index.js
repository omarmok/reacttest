import React from "react";
import Home from "./../Home";
import About from "./../About";
import Portofolio from "./../Portofolio";
import Profile from "./../Profile";
import SocialMedia from "./../SocialMedia";
import Usres from "../Usres";

function Index() {
  return (
    <div className="Index mt-5">
      <Home />
      <Usres />
      <Portofolio />
      <Profile />
      <About />
      <SocialMedia />
    </div>
  );
}

export default Index;
