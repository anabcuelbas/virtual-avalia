import Header from "../../../components/header/Header";
import Colors from "../../../constants/Colors";
import PageDefault from "../../../components/PageDefault";
import PageContent from "../../../components/PageContent";
import H1 from "../../../constants/Typography";
import ListButtonContainer from "../../../components/list/ListButtonContainer";
import ListHeaderButton from "../../../components/list/ListHeaderButton";
import LongButton from "../../../components/LongButton";
import Table from "../../../components/Table";
import { useState } from "react";

export const TestPage = () => {
  const [columnValue, setColumnValue] = useState([
    "Nome",
    "Data de Início",
    "",
  ]);
  const [rowValue, setRowValue] = useState([
    ["P1 de Gestão", "14/10/2021 - 14:30"],
    ["P2 de Cálculo", "12/10/2021 - 12:00"],
    ["P2 de Gestão", "11/11/2021 - 8:00"],
  ]);
  const [buttonText, setButtonText] = useState("Acessar");
  const [buttonPath, setButtonPath] = useState("/student-test-attempt");

  const handleHistoryClick = () => {
    setColumnValue(["Nome", ""]);
    setRowValue([["P1 de Álgebra"], ["P1 de Astrologia"]]);
    setButtonText("Ver nota e gabarito");
    setButtonPath("/student-test-check");
  };

  const handleTestsToDoClick = () => {
    setColumnValue(["Nome", "Data de Início", ""]);
    setRowValue([
      ["P1 de Gestão", "14/10/2021 - 14:30"],
      ["P2 de Cálculo", "12/10/2021 - 12:00"],
      ["P2 de Gestão", "11/11/2021 - 8:00"],
    ]);
    setButtonText("Acessar");
    setButtonPath("/student-test-attempt");
  };

  return (
    <PageDefault>
      <Header />
      <PageContent>
        <H1>Minhas Provas</H1>
        <ListButtonContainer>
          <ListHeaderButton onClick={handleTestsToDoClick}>
            Provas Pendentes
          </ListHeaderButton>
          <ListHeaderButton onClick={handleHistoryClick}>
            Histórico
          </ListHeaderButton>
        </ListButtonContainer>
        <Table
          hasHeader={true}
          columns={columnValue}
          rows={rowValue}
          hasButtons={true}
          buttons={[
            <LongButton
              path={buttonPath}
              name={buttonText}
              backgroundColor={Colors.accentOrange}
              textColor={Colors.white}
            />,
          ]}
        />
      </PageContent>
    </PageDefault>
  );
};
