import { useHistory } from "react-router-dom";

import { ReactComponent as TitleMobile } from "../../assets/MobileTitleGreen.svg";
import { ReactComponent as TitleDesktop } from "../../assets/TitleGreen.svg";

import LoginTitleContainerDesktop from "../../components/login/LoginTitleContainerDesktop";
import LoginTitleContainerMobile from "../../components/login/LoginTitleContainerMobile";
import PageDefault from "../../components/PageDefault";
import Colors from "../../constants/Colors";
import LoginContainer from "../../components/login/LoginContainer";
import LoginButton from "../../components/login/LoginButton";

export const HomeScreen = () => {
  const history = useHistory();

  const handleAdminLogin = () => {
    history.push("/admin-login");
  };

  const handleStudentLogin = () => {
    history.push("/student-login");
  };

  return (
    <PageDefault color={Colors.cream}>
      <LoginTitleContainerDesktop>
        <TitleDesktop />
      </LoginTitleContainerDesktop>
      <LoginTitleContainerMobile>
        <TitleMobile />
      </LoginTitleContainerMobile>
      <LoginContainer>
        <LoginButton color={Colors.primaryGreen} onClick={handleAdminLogin}>
          Faça login como Professor
        </LoginButton>
        <LoginButton color={Colors.primaryGreen} onClick={handleStudentLogin}>
          Faça login como Estudante
        </LoginButton>
      </LoginContainer>
    </PageDefault>
  );
};
