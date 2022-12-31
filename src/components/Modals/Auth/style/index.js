import styled from "styled-components";
import { Form } from "./Form.style";
import { Labels } from "./Labels.style";
import { Buttons } from "./Buttons.style";
import BackgroundImg from "../../../../images/greeting_bckg.webp";

const StyledAuthModal = styled.div`
  width: 380px;
  height: 305px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  background: #fff url(${BackgroundImg}) no-repeat fixed;
  background-size: cover;
  box-shadow: var(--primary-shadow);
  z-index: 11;

  * {
    transition: var(--transition);
  }

  .auth__wrapper {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 15px;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

StyledAuthModal.Labels = Labels;
StyledAuthModal.Form = Form;
StyledAuthModal.Buttons = Buttons;

export default StyledAuthModal;
