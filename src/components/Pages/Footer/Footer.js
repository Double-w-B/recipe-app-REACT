import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
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
          <span>Władysław Balandin</span>
        </a>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  font-size: 0.8rem;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);

  height: 5vh;
  display: grid;
  justify-items: center;
  a {
    color: #d1031b;
    font-weight: bold;
  }
`;

export default Footer;
