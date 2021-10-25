import React from "react";

import { ReactComponent as Title } from "../../../assets/TitleWhite.svg";
import LoginButton from "../../../components/login/LoginButton";
import LoginContainer from "../../../components/login/LoginContainer";
import LoginInput from "../../../components/login/LoginInput";
import LoginTitleContainer from "../../../components/login/LoginTitleContainer";
import PageDefault from "../../../components/PageDefault";
import Colors from "../../../constants/Colors";

export const StudentLogin = () => {
  return (
    <PageDefault color={Colors.primaryGreen}>
      <LoginTitleContainer>
        <Title />
      </LoginTitleContainer>
      <LoginContainer color={Colors.background}>
        <LoginInput placeholder="Login"/>
        <LoginInput placeholder="Senha"/>
        <LoginButton color={Colors.secondaryGreen}>Entrar</LoginButton>
      </LoginContainer>
    </PageDefault>
  );
};
