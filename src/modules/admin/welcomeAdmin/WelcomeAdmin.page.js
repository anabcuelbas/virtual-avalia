import { useHistory } from "react-router-dom";

import Header from "../../../components/header/Header";
import PageDefault from "../../../components/PageDefault";
import H1 from "../../../constants/Typography";
import MenuContainer from "../../../components/admin-menu/MenuContainter";
import MenuButton from "../../../components/admin-menu/MenuButton";
import Colors from "../../../constants/Colors";
import { Separator } from "../../../components/form/Separator";
import LogoutButton from "../../../components/admin-menu/MenuButton";

export const WelcomeAdmin = () => {
  const history = useHistory();

  const handleQuestionsClicked = () => {
    history.push("/admin-questions");
  };

  const handleTestsClicked = () => {
    history.push("/admin-tests");
  };

  const handleGradesClicked = () => {
    history.push("/admin-grades");
  };

  return (
    <PageDefault>
      <Header />
      <H1>Bem-vindo</H1>
      <MenuContainer>
        <MenuButton color={Colors.secondaryGreen} onClick={handleQuestionsClicked}>Questões</MenuButton>
        <MenuButton color={Colors.secondaryGreen} onClick={handleTestsClicked}>Provas</MenuButton>
        <MenuButton color={Colors.secondaryGreen} onClick={handleGradesClicked}>
          Notas e Submissões
        </MenuButton>
        <Separator></Separator>
        <LogoutButton color={Colors.accentOrange}>Logout</LogoutButton>
      </MenuContainer>
    </PageDefault>
  );
};
