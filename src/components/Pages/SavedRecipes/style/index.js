import styled from "styled-components";
import { SharedSection } from "../../../../styles/shared/SharedSection.style";

const StyledSavedRecipesSection = styled(SharedSection)`
  min-height: calc(85vh - 40px - 4rem);

  @media screen and (max-width: 900px) {
    min-height: calc(77vh - 40px - 5rem);
  }
`;

export default StyledSavedRecipesSection;
