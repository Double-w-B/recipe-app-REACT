import styled from "styled-components";
import { Sidebar } from "./Sidebar.style";
import { CloseButton } from "./CloseButton.style";
import BackgroundImg from "../../../../images/greeting_bckg.webp";

const StyledMenuModal = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 30px 0.5rem;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  position: absolute;
  bottom: 0;
  right: ${(props) => (props.show ? "0" : " -100%")};
  transition: all 0.5s ease-out;
  background: #fff url(${BackgroundImg}) no-repeat fixed;
  background-size: cover;
  box-shadow: var(--primary-shadow);
  z-index: 11;

  @media screen and (max-width: 1350px) {
    width: 30%;
  }

  @media screen and (max-width: 1200px) {
    width: 35%;
  }

  @media screen and (max-width: 992px) {
    width: 40%;
  }

  @media screen and (max-width: 900px) {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    width: 55%;
  }

  @media screen and (max-width: 600px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 75%;
  }
`;

StyledMenuModal.Sidebar = Sidebar;
StyledMenuModal.CloseButton = CloseButton;

export default StyledMenuModal;
