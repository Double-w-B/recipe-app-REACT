import styled from "styled-components";
import { Form, Button } from "./Form.style";
import { CloseButton } from "./CloseButton.style";
import { Content } from "./NewsletterModal.style";
import BackgroundImg from "../../../../images/greeting_bckg.webp";

const StyledNewsletterModal = styled.div`
  width: 65vw;
  height: 80vh;
  text-align: center;
  display: grid;
  place-items: center;
  background: #fff url(${BackgroundImg}) no-repeat fixed;
  background-size: cover;
  color: var(--red-clr);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: all 0.1s ease-out;
  z-index: 11;

  @media screen and (max-width: 1200px) {
    width: 75vw;
  }

  @media screen and (max-width: 900px) {
    width: 85vw;
  }

  @media screen and (max-width: 700px) {
    height: 70vh;
  }

  @media screen and (max-width: 480px) {
    width: 95vw;
  }
`;

StyledNewsletterModal.Content = Content;
StyledNewsletterModal.CloseButton = CloseButton;
StyledNewsletterModal.Form = Form;
StyledNewsletterModal.Button = Button;

export default StyledNewsletterModal;
