import React from "react";
import styled from "styled-components";

import Header from "../../../components/header/Header";
import LongButton from "../../../components/LongButton";
import PageDefault from "../../../components/PageDefault";
import Colors from "../../../constants/Colors";
import TestContainer from "../../../components/test/TestContainer";
import TestQuestionSolved from "../../../components/test/TestQuestionSolved";


const Title = styled.h1`
    font-family: Special Elite;
    font-size: 2rem;
`;

const Text = styled.p`
    font-family: Special Elite;
    font-size: 1.3rem;
`;

export const ViewSubmission = () => {
    return (
        <PageDefault>
            <Header />
            <TestContainer>
                <div style={{width: '100%'}}>
                    <Title>P1 de Gestão</Title>
                    <div style={{display: "flex", flexDirection: 'row', alignItems: 'baseline'}}>
                        <Text>Aluno:</Text>
                        <p style={{fontSize: '1.2rem'}}>Antônio</p>
                    </div>
                    <div style={{display: "flex", flexDirection: 'row', alignItems: 'baseline'}}>
                        <Text>Submissão:</Text>
                        <p style={{fontSize: '1.2rem'}}>02/10/2021 - 21:31</p>
                    </div>
                    <div style={{display: "flex", flexDirection: 'row', alignItems: 'baseline'}}>
                        <Text>Nota total:</Text>
                        <p style={{fontSize: '1.2rem'}}>0.0</p>
                    </div>
                    <div style={{display: "flex", flexDirection: 'row', alignItems: 'baseline'}}>
                        <Text>Visto:</Text>
                        <p style={{fontSize: '1.2rem'}}>Não</p>
                    </div>
                </div>
                <TestQuestionSolved
                    multiple
                    question="1. Espera significa"
                    items={["Quanto tempo uma atividade pode ser atrasada sem atrasar a data de término do projeto.", 
                            "Quanto tempo uma atividade pode ser atrasada sem atrasar a data de início mais cedo de sua sucessora.", 
                            "Tempo de espera.", 
                            "O produto de um caminho de ida e volta."]}
                    selected={1}
                    answer={2}
                    answerDescription="A resposta correta é: Tempo de espera." />
                <TestQuestionSolved
                    multiple
                    question="2. Selecione a letra A"
                    items={["C", "D", "A", "B"]}
                    selected={2}
                    answer={0}
                    answerDescription="A resposta correta é: A" />
                <TestQuestionSolved
                    evaluate
                    question="3. O que é um Canvas?"
                    givenAnswer="O Canvas tem como principal objetivo estruturar um modelo inovador de plano de negócios,
                    trazendo praticidade e principalmente dinamicidade na análise das organizações."
                />
                <LongButton path="/admin-grades" name="Salvar" backgroundColor={Colors.secondaryGreen} textColor={Colors.white} />
            </TestContainer>
        </PageDefault>
    );
};
