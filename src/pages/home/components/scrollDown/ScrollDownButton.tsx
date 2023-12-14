import React from "react";
import { StyledButton, ArrowIcon } from './style';
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
const ScrollDownButton: React.FC = () => {
  const handleClick = () => {
    window.scroll({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const theme=useTheme();
  const {t}=useTranslation();
  return (
    <StyledButton onClick={handleClick} themeMode={theme.palette.mode}>
      {t('Scroll_Down')}
      <ArrowIcon />
    </StyledButton>
  );
};

export default ScrollDownButton;
