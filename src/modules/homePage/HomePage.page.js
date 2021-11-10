import { ReactComponent as Title } from "../../assets/TitleGreen.svg";
import { useHistory } from "react-router-dom";
import LoginTitleContainer from "../../components/login/LoginTitleContainer";
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
      <LoginTitleContainer>
        <Title />
      </LoginTitleContainer>
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
