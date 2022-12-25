import styled from "styled-components";

const StyledModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.65);
  transition: all 0.3s linear;
`;

export default StyledModalOverlay;
