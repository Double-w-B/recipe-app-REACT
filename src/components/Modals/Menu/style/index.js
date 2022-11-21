import styled from "styled-components";
import { Sidebar } from "./Sidebar.style";
import { CloseButton } from "./CloseButton.style";
import BackgroundImg from "../../../../images/greeting_bckg.webp";
import { sideSlide } from "../../../../styles/shared/Keyframes.style";

const StyledMenuModal = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 30px 0.5rem;
  position: absolute;
  top: 0;
  right: ${(props) => (props.show ? "0" : " -100%")};
  transition: all 0.3s linear;
  -webkit-animation: ${sideSlide} 350ms ease-out forwards;
  -moz-animation: ${sideSlide} 350ms ease-out forwards;
  -o-animation: ${sideSlide} 350ms ease-out forwards;
  animation: ${sideSlide} 350ms ease-out forwards;
  background: #fff url(${BackgroundImg}) no-repeat fixed;
  background-size: cover;
  box-shadow: var(--primary-shadow);

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
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 65%;
  }
`;

StyledMenuModal.Sidebar = Sidebar;
StyledMenuModal.CloseButton = CloseButton;

export default StyledMenuModal;
