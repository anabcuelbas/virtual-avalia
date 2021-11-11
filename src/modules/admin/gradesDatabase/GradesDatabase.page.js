import React from "react";

import Header from "../../../components/header/Header";
import HeaderTitle from "../../../components/header/HeaderTitle"
import PageContent from "../../../components/PageContent";
import PageDefault from "../../../components/PageDefault";
import SearchBar from "../../../components/SearchBar";
import Table from "../../../components/Table";
import LongButton from "../../../components/LongButton";

import Colors from "../../../constants/Colors";

export const GradesDatabase = () => {
  return (
    <PageDefault>
        <Header>
            <HeaderTitle />
        </Header>
        <PageContent>
            <SearchBar placeholder="Pesquisar aluno" />
            <Table
                hasHeader={true}
                columns={["Aluno", "Nome da prova", "Submetido em", "Nota"]}
                rows={[["Antônio", "Gestão 1", "02/10/2021 21:31", "10.0"], 
                ["Maria", "Gestão 1", "02/10/2021 21:00", "8.5"], 
                ["Maria Clara Sousa", "Gestão 1", "02/10/2021 21:40", "10.0"], 
                ["Antônio Junior", "Gestão 1", "02/10/2021 21:20", "7.0"]]}
                hasButtons={true}
                buttons={[ 
                            <LongButton 
                                path="/admin-view-submission" 
                                name="Visualizar submissão" 
                                backgroundColor={Colors.secondaryGreen} 
                                textColor={Colors.white} 
                            />
                        ]}
            />
        </PageContent>
    </PageDefault>
  );
};
