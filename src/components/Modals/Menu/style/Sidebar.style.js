import styled from "styled-components";

export const Sidebar = styled.div`
  width: 80%;
  height: 80%;
  margin: 2rem auto;
  padding: 2rem 1rem 2rem 1rem;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: var(--secondary-shadow);
  transition: all 0.3s linear;

  p {
    font-size: 1.2rem;
    text-align: right;
    margin: 0.5rem 0;
  }

  .greeting {
    text-align: center;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.7);
    margin: auto auto 0 auto;
  }

  .submenu {
    width: 100%;
    position: relative;
    transition: 0.3s linear;

    p {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: end;

      span {
        order: 2;

        &:hover ~ svg {
          opacity: 0;
        }
      }

      svg {
        order: 1;
        font-size: 1.5rem;
        color: var(--yellow-clr);
        transition: var(--transition);
        opacity: ${(props) => props.isSubmenu && "0"};
      }
    }

    ul {
      visibility: ${(props) => (props.isSubmenu ? "visible" : "hidden")};
      opacity: ${(props) => (props.isSubmenu ? "1" : "0")};
      transition: all 0.3s linear;
      transition-delay: ${(props) => !props.isSubmenu && "0.6s"};

      li {
        font-size: 1rem;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: end;
        text-align: right;
        line-height: 1.5rem;
        margin: 0 0 0.5rem 0;
        color: var(--yellow-clr);
        transition: all 0.3s linear;
        visibility: ${(props) => (props.isSubmenu ? "visible" : "hidden")};
        opacity: ${(props) => (props.isSubmenu ? "1" : "0")};

        span {
          display: flex;
          align-items: center;
          color: var(--red-clr);
          cursor: pointer;
          margin-right: 0.5rem;

          img {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }
        }

        &:nth-child(1) {
          transition-delay: ${(props) => (props.isSubmenu ? "0.2s" : "0.8s")};
        }

        &:nth-child(2) {
          transition-delay: ${(props) => (props.isSubmenu ? "0.4s" : "0.6s")};
        }

        &:nth-child(3) {
          transition-delay: ${(props) => (props.isSubmenu ? "0.6s" : "0.4s")};
        }

        &:nth-child(4) {
          transition-delay: ${(props) => (props.isSubmenu ? "0.8s" : "0.2s")};
        }
      }
    }
  }

  a,
  p span,
  .submenu p span,
  li span {
    padding: 0 0.3rem;
    color: var(--red-clr);
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0px;
      height: 100%;
      display: block;
      transition: 300ms;
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:hover::after {
      width: 100%;
    }
  }

  .submenu p span::after {
    width: ${(props) => (props.isSubmenu ? "100%" : "0px")};
  }

  @media screen and (max-width: 480px) {
    width: 85%;
  }
`;
