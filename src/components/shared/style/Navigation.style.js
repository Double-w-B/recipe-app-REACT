import styled from "styled-components";

const StyledNavigation = styled.nav`
  width: 70%;
  margin: 3rem auto 2rem auto;
  display: flex;
  color: var(--red-clr);

  a {
    color: var(--red-clr);
    font-weight: bold;
    transition: all 0.3s linear;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0px;
      height: 100%;
      display: block;
      transition: 300ms;
      background-color: var(--light-grey-bcg-clr);
      z-index: -1;
    }

    &:hover::after {
      width: 100%;
    }
  }

  p {
    width: 100%;
    font-size: 1.4rem;
    color: var(--red-clr);
    font-weight: bold;
    cursor: default;
    overflow-wrap: break-word;

    .arrow {
      margin: 0 1rem 0 1.5rem;
      font-weight: normal;

      img {
        -webkit-transform: rotate(45deg) translateY(7px);
        transform: rotate(45deg) translateY(7px);
      }
    }

    .amount {
      color: rgba(0, 0, 0, 0.6);
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 1250px) {
    width: 80%;
    p {
      .arrow {
        font-size: 1.3rem;
        img {
          width: 28px;
        }
      }
    }
  }

  @media screen and (max-width: 1060px) {
    width: 85%;
  }

  @media screen and (max-width: 900px) {
    width: 80%;

    p {
      .arrow {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    p {
      .arrow {
        font-size: 1.1rem;
        img {
          width: 25px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export default StyledNavigation;
