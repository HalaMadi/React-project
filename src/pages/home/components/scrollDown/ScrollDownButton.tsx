import React from "react";
import { StyledButton, ArrowIcon } from './style';
import { useTheme } from "@mui/material";
const ScrollDownButton: React.FC = () => {
  const handleClick = () => {
    window.scroll({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const theme=useTheme();
  return (
    <StyledButton onClick={handleClick} themeMode={theme.palette.mode}>
      Scroll Down
      <ArrowIcon />
    </StyledButton>
  );
};

export default ScrollDownButton;
