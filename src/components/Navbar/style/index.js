import styled from "styled-components";
import { Logo } from "./Logo.style";
import { MenuButton } from "./MenuButtons.style";
import { SearchForm } from "./SearchForm.style";

const StyledNavbar = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 18vh;
  }
`;

StyledNavbar.Logo = Logo;
StyledNavbar.MenuButton = MenuButton;
StyledNavbar.SearchForm = SearchForm;

export default StyledNavbar;
