import React, { useState } from "react";

import PageDefault from "../../../components/PageDefault";
import Header from "../../../components/header/Header";
import { Fieldset } from "../../../components/form/Fieldset";
import { FieldsetHeader } from "../../../components/form/FieldsetHeader";
import { Main } from "../../../components/form/Main";
import { InputRow } from "../../../components/form/InputRow";
import { Input } from "../../../components/form/Input";
import LongButton from "../../../components/LongButton";
import Colors from "../../../constants/Colors";
import TestCard from "../../../components/schedule/TestCard";
import TestsContainer from "../../../components/schedule/TestsContainer";

export const ScheduleTests = () => {
  return (
    <PageDefault>
      <Header />

      <Main style={{width: '80%', alignSelf: 'center'}}>
        <FieldsetHeader>
          <h1>Agendamento de Provas</h1>
          <LongButton
            path="/admin-tests"
            name="Salvar"
            backgroundColor={Colors.secondaryGreen}
            textColor={Colors.white}
          />
        </FieldsetHeader>
        <Fieldset>
          <InputRow>
            <div>
              <label>Data</label>
              <Input type="text" placeholder="dd/mm/aaaa" />
            </div>
            <div>
              <label>Horário Inicial</label>
              <Input placeholder="hh:mm" />
            </div>
            <div>
              <label>Horário Final</label>
              <Input type="text" placeholder="hh:mm" />
            </div>
          </InputRow>

          <h2>Provas Selecionadas:</h2>
          <TestsContainer>
            <TestCard>Título: P1 de Gestão</TestCard>
            <TestCard>Título: P1 de Cálculo I</TestCard>
            <TestCard>Título: P1 de Cálculo II</TestCard>
          </TestsContainer>
        </Fieldset>
      </Main>

    </PageDefault>
  );
}
