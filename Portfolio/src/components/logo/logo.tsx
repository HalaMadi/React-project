import React from "react";
import Logo from "../../public/Logo.svg";
import { StyledLogo } from "./style";
const logo: React.FC = () => {
  return <StyledLogo component="img" alt="Logo" src={Logo} />;
};

export default logo;
