import styled from "styled-components";

export const Buttons = styled.div`
  width: 80%;
  height: 60px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 90px;
    padding: 0.3rem 0.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    outline: none;
    border: none;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.55);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;

    &:first-child {
      pointer-events: ${(props) =>
        (props.isLoading || props.errorMsg) && "none"};
    }

    img {
      width: 22px;
      height: calc(38px - 1rem);
      display: block;
      object-fit: fill;
      margin: 0 auto;
    }

    &:hover {
      color: var(--yellow-clr);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
