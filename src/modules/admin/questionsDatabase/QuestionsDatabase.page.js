import React from "react";
import './QuestionsDb.css';

import PageDefault from "../../../components/PageDefault";
import PageContent from "../../../components/PageContent";
import Header from  '../../../components/header/Header'
import HeaderTitle from  '../../../components/header/HeaderTitle'
import Table from '../../../components/Table'
import EditButton from '../../../components/EditButton'
import DeleteButton from '../../../components/DeleteButton'
import LongButton from '../../../components/LongButton'
import SearchBar from '../../../components/SearchBar'

export const QuestionsDatabase = () => {
  return (
    <PageDefault>
        <Header>
            <HeaderTitle/>
        </Header>
        <PageContent>
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
