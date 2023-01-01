import React from "react";
import StyledDeleteDataModal from "./style";

const Question = (props) => {
  const { isUserDeleted } = props;

  return (
    <StyledDeleteDataModal.Question {...props}>
      {isUserDeleted ? (
        <p>Thank you for being with us. Hope to welcome you back soon!</p>
      ) : (
        <p>
          Are you sure you want to delete your account? This will permanently
          delete all saved recipes.
        </p>
      )}
    </StyledDeleteDataModal.Question>
  );
};

export default Question;
