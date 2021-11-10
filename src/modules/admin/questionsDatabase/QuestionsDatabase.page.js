import React from "react";
<<<<<<< HEAD
import './QuestionsDb.css';
=======
import styled from "styled-components";
>>>>>>> a5d7b98ae09c08cc0cd5c6e42d9bd8a1ee4917f2

import PageDefault from "../../../components/PageDefault";
import PageContent from "../../../components/PageContent";
import Header from  '../../../components/header/Header'
import HeaderTitle from  '../../../components/header/HeaderTitle'
import Table from '../../../components/Table'
import EditButton from '../../../components/EditButton'
import DeleteButton from '../../../components/DeleteButton'
import LongButton from '../../../components/LongButton'
import SearchBar from '../../../components/SearchBar'

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

export const QuestionsDatabase = () => {
  return (
    <PageDefault>
        <Header>
            <HeaderTitle/>
        </Header>
        <PageContent>
<<<<<<< HEAD
            <div className='top-items'>
                <SearchBar
                    placeholder='Pesquisar pelo nome da questão'
                />
                <div className='button-container'>
                    <LongButton
                        path='/'
                        name='Cadastrar questão'
                        color='#30C23F'
                    />
                </div>
            </div>
=======
            <Container>
                <SearchBar placeholder='Pesquisar pelo nome da questão' />
                <LongButton path='/' name='Cadastrar questão' backgroundColor={Colors.secondaryGreen} textColor={Colors.white} icon />
            </Container>
>>>>>>> a5d7b98ae09c08cc0cd5c6e42d9bd8a1ee4917f2

            <Table
                hasHeader={false}
                rows={[["Quem descobriu o Brasil?"], 
                ["Em que ano foi declarada a independência do Brasil?"], 
                ["Qual foi o primeiro presidente  do Brasil?"], 
                ["Qual foi a duração da Ditadura Militar?"]]}
                hasButtons={true}
                buttons={[<EditButton path='/'/>, <DeleteButton/>]}
            />
        </PageContent>
    </PageDefault>
  );
};
