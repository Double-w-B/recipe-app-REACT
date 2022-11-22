import React from "react";
import { HiArrowUp } from "react-icons/hi";
import StyledScrollButton from "./style/ScrollButton.style";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const root = document.getElementById("root");

  React.useEffect(() => {
    const showData = () => {
      const height = root.scrollTop;
      if (height > 700) return setIsVisible(true);
      return setIsVisible(false);
    };

    root.addEventListener("scroll", showData);
    return () => root.removeEventListener("scroll", showData);
  });

  const handleClick = () => {
    root.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledScrollButton onClick={handleClick} visible={isVisible}>
      <HiArrowUp />
    </StyledScrollButton>
  );
};

export default ScrollButton;
