import React from "react";

import { ReactComponent as Title } from "../../../assets/TitleGreen.svg";
import PageDefault from "../../../components/PageDefault";
import Table from '../../../components/Table'
import EditButton from '../../../components/EditButton'

export const QuestionsDatabase = () => {
  return (
    <PageDefault>
        <Table
                title="Reservas"
                hasHeader={false}
                rows={[["Quem descobriu o Brasil?", <EditButton path='/'/>], 
                ["Em que ano foi declarada a independência do Brasil?"], 
                ["Qual foi o primeiro presidente  do Brasil?"], 
                ["Qual foi a duração da Ditadura Militar?"]]}
            />
    </PageDefault>
  );
};
