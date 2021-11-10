import React from "react";

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
            <LongButton
                path='/'
                name='Cadastrar questão'
                backgroundColor={Colors.secondaryGreen}
                textColor={Colors.white}
                icon
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
