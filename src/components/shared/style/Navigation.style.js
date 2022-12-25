import styled from "styled-components";

const StyledNavigation = styled.nav`
  width: 50%;
  min-height: 40px;
  margin: 0 auto 4rem auto;
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
    font-size: 1.3rem;
    color: var(--red-clr);
    font-weight: bold;
    cursor: default;
    overflow-wrap: break-word;

    .arrow {
      margin: 0 1rem 0 1.5rem;

      img {
        -webkit-transform: rotate(45deg) translateY(12px);
        transform: rotate(45deg) translateY(12px);
      }
    }

    .amount {
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.6);
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 1250px) {
    p {
      font-size: 1.2rem;
      .arrow img {
        width: 28px;
        -webkit-transform: rotate(45deg) translateY(10px);
        transform: rotate(45deg) translateY(10px);
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 80%;
    margin: 1rem auto 4rem auto;

    p {
      font-size: 1.15rem;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      .arrow img {
        width: 25px;
        -webkit-transform: rotate(45deg) translateY(8px);
        transform: rotate(45deg) translateY(8px);
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export default StyledNavigation;
