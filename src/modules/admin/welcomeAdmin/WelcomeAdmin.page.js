import Header from "../../../components/header/Header";
import PageDefault from "../../../components/PageDefault";
import HeaderTitle from "../../../components/header/HeaderTitle";
import H1 from "../../../constants/Typography";
import MenuContainer from "../../../components/admin-menu/MenuContainter";

export const WelcomeAdmin = () => {
  return (
    <PageDefault>
      <Header>
        <HeaderTitle />
      </Header>
      <H1>Bem-Vindo</H1>
      <MenuContainer>
          
      </MenuContainer>
    </PageDefault>
  );
};
