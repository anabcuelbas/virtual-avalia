import Header from "../../../components/header/Header";
import HeaderTitle from "../../../components/header/HeaderTitle";
import HeaderLogoutButton from "../../../components/header/HeaderLogoutButton";
import Colors from "../../../constants/Colors";
import PageDefault from "../../../components/PageDefault";
import PageContent from "../../../components/PageContent";
import H1, { H3 } from "../../../constants/Typography";
import ListContainer from "../../../components/list/ListContainer";
import ListButtonContainer from "../../../components/list/ListButtonContainer";
import ListHeaderButton from "../../../components/list/ListHeaderButton";
import ListItemContainer from "../../../components/list/ListItemContainer";
import ListHeader from "../../../components/list/ListHeader";

export const TestPage = () => {
  return (
    <PageDefault>
      <Header>
        <HeaderTitle />
        <HeaderLogoutButton color={Colors.accentOrange}>
          Sair
        </HeaderLogoutButton>
      </Header>
      <PageContent>
        <H1>Minhas Provas</H1>
        <ListButtonContainer>
          <ListHeaderButton>Provas Pendentes</ListHeaderButton>
          <ListHeaderButton>Histórico</ListHeaderButton>
        </ListButtonContainer>
        <ListContainer>
          <ListHeader>
              <H3>Nome</H3>
              <H3>Data de Início</H3>
          </ListHeader>
          <ListItemContainer></ListItemContainer>
        </ListContainer>
      </PageContent>
    </PageDefault>
  );
};
