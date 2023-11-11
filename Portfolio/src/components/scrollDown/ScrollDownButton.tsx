import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { StyledButton } from "./style";

const ScrollDownButton: React.FC = () => {
  const handleClick = () => {
    window.scroll({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <StyledButton onClick={handleClick}>
      Scroll Down
      <ArrowDownwardIcon />
    </StyledButton>
  );
};

export default ScrollDownButton;
