import React from "react";

import PageDefault from "../../../components/PageDefault";
import PageContent from "../../../components/PageContent";
import Header from  '../../../components/header/Header'
import HeaderTitle from  '../../../components/header/HeaderTitle'
import Table from '../../../components/Table'
import EditButton from '../../../components/EditButton'
import DeleteButton from '../../../components/DeleteButton'
import LongGreenButton from '../../../components/LongGreenButton'
import SearchBar from '../../../components/SearchBar'

export const QuestionsDatabase = () => {
  return (
    <PageDefault>
        <Header>
            <HeaderTitle/>
        </Header>

        <PageContent>

            <SearchBar
                placeholder='Pesquisar pelo nome da questão'
            />
            <LongGreenButton
                path='/'
                name='Cadastrar questão'
            />

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
