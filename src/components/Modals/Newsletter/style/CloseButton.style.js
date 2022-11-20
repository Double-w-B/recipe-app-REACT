import styled from "styled-components";

export const CloseButton = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  opacity: 1;

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--red-clr);
    cursor: pointer;

    &:active {
      transform: scale(0.8);
    }
  }

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
    top: 0;
    right: 0;
  }
`;
