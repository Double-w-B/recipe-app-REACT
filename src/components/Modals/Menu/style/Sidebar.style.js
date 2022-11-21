import styled from "styled-components";

export const Sidebar = styled.div`
  width: 80%;
  margin: 2rem auto;
  padding: 2rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: var(--primary-shadow);

  p {
    text-align: right;
    margin: 0.5rem 0;
  }

  a {
    font-size: 1.2rem;
    padding: 0 0.3rem;
    color: var(--red-clr);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0px;
      height: 100%;
      display: block;
      transition: 300ms;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
