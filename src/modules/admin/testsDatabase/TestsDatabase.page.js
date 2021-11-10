import React from "react";
import styled from "styled-components";

import PageDefault from "../../../components/PageDefault";
import Header from "../../../components/header/Header";
import HeaderTitle from "../../../components/header/HeaderTitle"
import SearchBar from "../../../components/SearchBar";
import PageContent from "../../../components/PageContent";
import LongButton from "../../../components/LongButton";

import Colors from "../../../constants/Colors";

const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 5rem;
    }
`;

export const TestsDatabase = () => {
  return (
    <PageDefault>
        <Header>
            <HeaderTitle />
        </Header>
        <PageContent>
            <Container>
                <SearchBar placeholder="Pesquisar por título" />
                <LongButton path="/" name="Cadastrar Questão" color={Colors.secondaryGreen} icon />
            </Container>
        </PageContent>
    </PageDefault>
  );
};
