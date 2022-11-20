import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 5vh;
  font-size: 0.8rem;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
  display: grid;
  justify-items: center;
  cursor: default;

  a {
    color: var(--red-clr);
    font-weight: bold;
    letter-spacing: 0.5px;
    position: relative;
    padding: 0 0.3rem;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0px;
      height: 100%;
      display: block;
      transition: 300ms;
      background-color: rgba(255, 255, 255, 0.7);
      z-index: -1;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export default StyledFooter;
