import styled from "styled-components";
import { rotate2 } from "../../../../styles/shared/Keyframes.style";

export const StyledLoadMoreButton = styled.div`
  width: 16rem;
  height: 13rem;
  background-color: var(--light-grey-bcg-clr);
  font-size: 2.2rem;
  margin: 1rem;
  border: 6px solid var(--light-grey-bcg-clr);
  box-shadow: var(--secondary-shadow);

  &:hover {
    box-shadow: var(--tertiary-shadow);
  }

  div {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.25);

    p {
      color: var(--red-clr);
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

      &:last-child {
        display: flex;
        align-items: center;
        svg {
          margin-left: 0.5rem;
          align-self: center;
        }
      }
    }

    &:hover {
      cursor: pointer;
      color: rgba(0, 0, 0, 1);
      background-color: rgba(0, 0, 0, 0.2);

      svg {
        -webkit-animation: ${rotate2} 1.5s linear infinite; /* Chrome, Safari 5 */
        -moz-animation: ${rotate2} 1.5s linear infinite; /* Firefox 5-15 */
        -o-animation: ${rotate2} 1.5s linear infinite; /* Opera 12+ */
        animation: ${rotate2} 1.5s linear infinite; /* Chrome, Firefox 16+, 
                                                      IE 10+, Safari 5 */
      }
    }

    &:active p {
      transform: scale(0.95);
    }
  }

  @media screen and (max-width: 700px) {
    width: 15rem;
    height: 13rem;
  }

  @media screen and (max-width: 640px) {
    width: 21rem;
    height: 18rem;
  }

  @media screen and (max-width: 430px) {
    width: 17em;
    height: 15rem;
  }
`;
