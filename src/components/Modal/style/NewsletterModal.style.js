import styled from "styled-components";
import BackgroundImg from "../../../images/greeting_bckg.webp";
import { CloseBtn } from "./CloseBtn.style";
import { Form, Button } from "./Form.style";

const StyledNewsletterModal = styled.div`
  width: 65vw;
  height: 80vh;
  text-align: center;
  display: grid;
  place-items: center;
  background: #fff url(${BackgroundImg}) no-repeat fixed;
  background-size: cover;
  color: var(--red-clr);
  position: relative;

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

const Content = styled.div`
  width: 90%;
  height: 85%;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  color: #303030;

  img {
    width: 280px;
    margin: 0 auto;
  }

  h1 {
    justify-self: center;
    color: var(--red-clr);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
  }

  p:first-of-type {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--yellow-clr);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
  }

  p:last-of-type {
    font-weight: bold;
    color: var(--red-clr);
    font-size: 1.5rem;
  }

  @media screen and (max-width: 900px) {
    img {
      width: 160px;
    }

    h1 {
      font-size: 1.8rem;
    }

    p:first-of-type {
      font-size: 1.5rem;
    }

    p:last-of-type {
      margin: 0 1rem;
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      width: 150px;
    }
    h1 {
      font-size: 1.6rem;
      margin: 0 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
      margin: 0 1rem;
    }

    p:first-of-type {
      font-size: 1.35rem;
    }

    p:last-of-type {
      margin: 0 1rem;
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 430px) {
    width: 95%;
    height: 88%;
  }
`;

StyledNewsletterModal.Content = Content;
StyledNewsletterModal.CloseBtn = CloseBtn;
StyledNewsletterModal.Form = Form;
StyledNewsletterModal.Button = Button;

export default StyledNewsletterModal;
