import styled from "styled-components";
import { Range } from "./Range.style";
import { Container } from "./HomePage.style";
import { Preferences } from "./Preferences.style";

const StyledHomePage = styled.section`
  width: 80%;
  min-height: 85vh;
  display: grid;
  place-items: center;
  margin: 0 auto;
`;

StyledHomePage.Container = Container;
StyledHomePage.Preferences = Preferences;
StyledHomePage.Range = Range;

export default StyledHomePage;
