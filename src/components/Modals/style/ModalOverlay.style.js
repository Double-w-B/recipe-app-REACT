import styled from "styled-components";

const StyledModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.55);
`;

export default StyledModalOverlay;
