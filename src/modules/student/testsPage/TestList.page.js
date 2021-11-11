import Header from "../../../components/header/Header";
import Colors from "../../../constants/Colors";
import PageDefault from "../../../components/PageDefault";
import PageContent from "../../../components/PageContent";
import H1, { H3 } from "../../../constants/Typography";
import ListButtonContainer from "../../../components/list/ListButtonContainer";
import ListHeaderButton from "../../../components/list/ListHeaderButton";
import LongButton from "../../../components/LongButton";
import Table from "../../../components/Table";

export const TestPage = () => {
  return (
    <PageDefault>
      <Header />
      <PageContent>
        <H1>Minhas Provas</H1>
        <ListButtonContainer>
          <ListHeaderButton>Provas Pendentes</ListHeaderButton>
          <ListHeaderButton>Histórico</ListHeaderButton>
        </ListButtonContainer>
        <Table
          border-top={0}
          hasHeader={true}
          columns={["Nome", "Data de Início", ""]}
          rows={[
            ["P1 de Gestão", "14/10/2021 - 14:30"],
            ["P2 de Cálculo", "12/10/2021 - 12:00"],
            ["P2 de Gestão", "11/11/2021 - 8:00"],
          ]}
          hasButtons={true}
          buttons={[
            <LongButton
              path="/admin-view-submission"
              name="Acessar"
              backgroundColor={Colors.accentOrange}
              textColor={Colors.white}
            />,
          ]}
        />
      </PageContent>
    </PageDefault>
  );
};
