
import React from "react";
import logo from "../assets/logo";

function About({ image, about }) {
  return (
    <aside>
      <img src={image ? image : logo} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
