import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as TitleMobile } from "../../../assets/MobileTitleGreen.svg";
import { ReactComponent as TitleDesktop } from "../../../assets/TitleGreen.svg";

import LoginButton from "../../../components/login/LoginButton";
import LoginContainer from "../../../components/login/LoginContainer";
import LoginInput from "../../../components/login/LoginInput";
import LoginTitleContainerDesktop from "../../../components/login/LoginTitleContainerDesktop";
import LoginTitleContainerMobile from "../../../components/login/LoginTitleContainerMobile";
import PageDefault from "../../../components/PageDefault";
import Colors from "../../../constants/Colors";

export const AdminLogin = () => {

  const history = useHistory();

  const handleLogin = () => {
    history.push("welcome-admin");
  }

  return (
    <PageDefault>
      <LoginTitleContainerDesktop>
        <TitleDesktop />
      </LoginTitleContainerDesktop>
      <LoginTitleContainerMobile>
        <TitleMobile />
      </LoginTitleContainerMobile>
      <LoginContainer color={Colors.background}>
        <LoginInput placeholder="Login" />
        <LoginInput placeholder="Senha" />
        <LoginButton color={Colors.primaryGreen} onClick={handleLogin}>Entrar</LoginButton>
      </LoginContainer>
    </PageDefault>
  );
};
