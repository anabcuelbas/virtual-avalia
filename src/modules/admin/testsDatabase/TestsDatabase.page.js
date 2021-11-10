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

    .long-button {
        margin: 0 0 0 1em;
    }

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 8rem;

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
        <Header>
            <HeaderTitle />
        </Header>
        <PageContent>
            <Container>
                <SearchBar placeholder="Pesquisar por título" />
                <LongButton path="/" name="Agendar prova" backgroundColor={Colors.lightGrey} textColor={Colors.black} />
                <LongButton path="/" name="Nova prova" backgroundColor={Colors.secondaryGreen} textColor={Colors.white} icon />
            </Container>
        </PageContent>
    </PageDefault>
  );
};
