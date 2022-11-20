import React from "react";
import StyledFooter from "./style/Footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Copyright &copy; {new Date().getFullYear()} Foodie Mood. All rights
        reserved.
      </p>
      <p>
        made by{" "}
        <a
          href="https://github.com/Double-w-B"
          target="_blank"
          rel="noopener noreferrer"
        >
          Władysław Balandin
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
