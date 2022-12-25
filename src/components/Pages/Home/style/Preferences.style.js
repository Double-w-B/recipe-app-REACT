import styled from "styled-components";
import sortIco from "../../../../images/sort-down.svg";

export const Preferences = styled.div`
  width: 15.5rem;
  height: 14rem;
  margin: 1rem;
  background-color: rgba(245, 245, 245, 0.6);
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border: 1px solid var(--yellow-clr);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  &.show {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  .icon {
    font-size: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    color: var(--red-clr);
    cursor: pointer;
    &:active {
      transform: scale(0.5);
    }
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 70%;
    opacity: 0;
    cursor: pointer;
    display: block;
    padding-left: 0.3rem;
    font-size: 1.05rem;
    border: 1px solid #aaa;
    outline: none;
    border-radius: 0.3em;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.8);
    background-color: transparent;
    background-image: url(${sortIco}),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e55d 100%);
    background-repeat: no-repeat;
    background-position: right 0.7em top 5%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  option {
    font-family: "Century Gothic";
  }
  select option * {
    cursor: pointer;
  }

  label {
    line-height: 1;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.7);
    transform: translateY(3rem);

    & *:first-child {
      color: var(--yellow-clr);
      margin-right: 1rem;
    }
  }

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    select {
      opacity: 1;
    }

    label {
      transform: translateY(1.1rem);
    }
  }

  select.show {
    opacity: 1;
  }

  label.show {
    transform: translateY(1.1rem);
  }

  @media screen and (max-width: 1530px) {
    &:hover {
      label {
        transform: translateY(1.1rem);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    label {
      font-size: 1.7rem;
    }
    select {
      font-size: 1rem;
    }

    &:hover {
      label {
        transform: translateY(1.1rem);
      }
    }

    @media screen and (max-width: 1140px) {
      width: 14rem;
      height: 13rem;
    }

    @media screen and (max-width: 900px) {
      width: 14.5rem;
      height: 13rem;
      label {
        & *:first-child {
          font-size: 2rem;
        }
      }
    }

    @media screen and (max-width: 768px) {
      label {
        font-size: 1.8rem;
        transform: none;
        margin-top: 2rem;
      }

      select {
        opacity: 1;
        width: 90%;
        font-size: 1rem;
      }

      &:hover {
        label {
          transform: none;
        }
      }

      label.show {
        transform: none;
      }
    }
    @media screen and (max-width: 645px) {
      width: 17.5rem;
      height: 14rem;
    }

    @media screen and (max-width: 600px) {
      label {
        font-size: 2rem;
      }
    }
  }
`;
