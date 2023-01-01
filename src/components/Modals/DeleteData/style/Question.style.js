import styled from "styled-components";

export const Question = styled.div`
  width: 100%;
  height: ${(props) => (props.isUserDeleted ? "calc(100% - 60px)" : "110px")};
  padding: 1rem 1rem 0.5rem 1rem;
  display: ${(props) => props.isUserDeleted && "grid"};
  place-items: center;

  p {
    text-align: center;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.65);
  }
`;
