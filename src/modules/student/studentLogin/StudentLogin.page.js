import React from "react";

import { ReactComponent as TitleMobile } from "../../../assets/MobileTitleWhite.svg";
import { ReactComponent as TitleDesktop } from "../../../assets/TitleWhite.svg";

import LoginButton from "../../../components/login/LoginButton";
import LoginContainer from "../../../components/login/LoginContainer";
import LoginInput from "../../../components/login/LoginInput";
import LoginTitleContainerDesktop from "../../../components/login/LoginTitleContainerDesktop";
import LoginTitleContainerMobile from "../../../components/login/LoginTitleContainerMobile";
import PageDefault from "../../../components/PageDefault";
import Colors from "../../../constants/Colors";

export const StudentLogin = () => {
  return (
    <PageDefault color={Colors.primaryGreen}>
      <LoginTitleContainerDesktop>
        <TitleDesktop />
      </LoginTitleContainerDesktop>
      <LoginTitleContainerMobile>
        <TitleMobile />
      </LoginTitleContainerMobile>
      <LoginContainer color={Colors.background}>
        <LoginInput placeholder="Login"/>
        <LoginInput placeholder="Senha"/>
        <LoginButton color={Colors.secondaryGreen}>Entrar</LoginButton>
      </LoginContainer>
    </PageDefault>
  );
};
