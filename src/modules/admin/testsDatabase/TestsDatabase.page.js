import React from "react";
import styled from "styled-components";

import EditButton from "../../../components/EditButton";
import DeleteButton from "../../../components/DeleteButton";
import Header from "../../../components/header/Header";
import LongButton from "../../../components/LongButton";
import PageContent from "../../../components/PageContent";
import PageDefault from "../../../components/PageDefault";
import SearchBar from "../../../components/SearchBar";
import Table from "../../../components/Table";

import Colors from "../../../constants/Colors";

const Container = styled.div`
    display: flex;
    flex-direction: row;

    .long-button {
        margin: 0 0 0 1em;
    }

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .long-button {
            box-sizing: border-box;
            margin: 1em 0 0 0;
            width: 80vw;
        }
    }
`;

export const TestsDatabase = () => {
  return (
    <PageDefault>
        <Header />
        <PageContent>
            <Container>
                <SearchBar placeholder="Pesquisar por título" />
                <LongButton path="/admin-schedule" name="Agendar prova" backgroundColor={Colors.lightGrey} textColor={Colors.black} />
                <LongButton path="/admin-generate-tests" name="Nova prova" backgroundColor={Colors.secondaryGreen} textColor={Colors.white} icon />
            </Container>
            <Table
                hasHeader={false}
                selectionButton={true}
                rows={[["Título: P1 de Gestão", "Data: 08/19/2021"], 
                ["Título: P2 de Gestão", "Data: 10/10/2021"], 
                ["Título: P2 de Cálculo", "Data: 21/10/2021"], 
                ["Título: P3 de Gestão", "Data: 22/10/2021"]]}
                hasButtons={true}
                buttons={[<EditButton path='/'/>, <DeleteButton/>]}
            />
        </PageContent>
    </PageDefault>
  );
};
