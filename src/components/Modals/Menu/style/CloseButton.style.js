import styled from "styled-components";

export const CloseButton = styled.div`
  width: 30px;
  height: 30px;

  svg {
    color: var(--red-clr);
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s linear;

    &:active {
      transform: scale(0.7);
    }
  }
`;
