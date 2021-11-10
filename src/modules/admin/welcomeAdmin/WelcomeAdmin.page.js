import Header from "../../../components/header/Header";
import PageDefault from "../../../components/PageDefault";
import HeaderTitle from "../../../components/header/HeaderTitle";
import H1 from "../../../constants/Typography";
import MenuContainer from "../../../components/admin-menu/MenuContainter";
import MenuButton, {
  LogoutButton,
} from "../../../components/admin-menu/MenuButton";
import Colors from "../../../constants/Colors";

export const WelcomeAdmin = () => {
  return (
    <PageDefault>
      <Header>
        <HeaderTitle />
      </Header>
      <H1>Bem-Vindo</H1>
      <MenuContainer>
        <MenuButton color={Colors.secondaryGreen}>Questões</MenuButton>
        <MenuButton color={Colors.secondaryGreen}>Provas</MenuButton>
        <MenuButton color={Colors.secondaryGreen}>
          Notas e Submissões
        </MenuButton>
        <LogoutButton color={Colors.accentOrange}>Logout</LogoutButton>
      </MenuContainer>
    </PageDefault>
  );
};
