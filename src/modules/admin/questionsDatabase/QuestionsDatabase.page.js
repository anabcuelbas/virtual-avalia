import React from "react";
import './QuestionsDb.css';

import PageDefault from "../../../components/PageDefault";
import PageContent from "../../../components/PageContent";
import Header from  '../../../components/header/Header'
import Table from '../../../components/Table'
import EditButton from '../../../components/EditButton'
import DeleteButton from '../../../components/DeleteButton'
import LongButton from '../../../components/LongButton'
import SearchBar from '../../../components/SearchBar'

export const QuestionsDatabase = () => {
  return (
    <PageDefault>
        <Header />

        <PageContent>
            <div className='top-items'>
                <SearchBar
                    placeholder='Pesquisar pelo nome da questão'
                />
                <div className='button-container'>
                    <LongButton
                        path='/admin-create-question'
                        name='Cadastrar questão'
                        backgroundColor='#30C23F'
                        textColor='white'
                        icon
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
