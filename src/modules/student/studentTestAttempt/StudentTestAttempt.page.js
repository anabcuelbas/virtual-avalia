import styled from "styled-components";
import Header from "../../../components/header/Header";
import LongButton from "../../../components/LongButton";
import PageContent from "../../../components/PageContent";
import PageDefault from "../../../components/PageDefault";
import TestContainer from "../../../components/test/TestContainer";
import TestQuestion from "../../../components/test/TestQuestion";
import Colors from "../../../constants/Colors";
import H1 from "../../../constants/Typography";

const Floating = styled.div`
  position: fixed;
  bottom: 0;
  right: 70px;
`

const CustomTestContainer = styled(TestContainer)`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 600px) {
      padding: 3em;
  }
`

export function StudentTestAttempt() {
  return (
    <PageDefault>
      <Header />
      <PageContent>
        <CustomTestContainer>
          <H1>P1 de Gestão</H1>
          <TestQuestion
            question="Qual dos itens a seguir não é uma habilidade geral de gerenciamento?"
            multiple
            items={['Motivar a equipe de projeto.', 'Comprar e contratar.', 'Vendas e marketing.', 'Contratos e legislação comercial.']}
          />
          <TestQuestion
            question="O que é um programa no contexto da gestão de projetos?"
          />
          <Floating>
            <LongButton
              name="Submeter"
              path="#"
              backgroundColor={Colors.secondaryGreen}
              textColor={Colors.white}
            />
          </Floating>
        </CustomTestContainer>
      </PageContent>
    </PageDefault>
  )
}
