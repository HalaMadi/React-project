import React from "react";
import { StyledButton, ArrowIcon } from './style';

const ScrollDownButton: React.FC = () => {
  const handleClick = () => {
    window.scroll({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <StyledButton onClick={handleClick}>
      Scroll Down
      <ArrowIcon />
    </StyledButton>
  );
};

export default ScrollDownButton;
