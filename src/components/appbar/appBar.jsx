import React from 'react';
import LogoImage from '../../assets/logo_2.png'; 
import {CustomAppBar, Logo, Bar} from "./styled";

const appBar = () => {
  return (
    <CustomAppBar position="static">
      <Bar>
      <Logo src={LogoImage} alt="Logo" />
      </Bar>
    </CustomAppBar>
  );
}

export default appBar;

