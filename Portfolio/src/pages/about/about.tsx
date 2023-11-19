import React from "react";
import Header from "./components/header/header";
import Collaborate from "./components/collaborate/collaborate";
import Design from "./components/design/design";

const about: React.FC = () => {
  return (
    <>
    <Header/>
    <Collaborate/>
    <Design/>
    </>
  );
};

export default about;
