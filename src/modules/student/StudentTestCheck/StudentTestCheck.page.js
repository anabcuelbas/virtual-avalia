import styled from "styled-components";
import Header from "../../../components/header/Header";
import PageContent from "../../../components/PageContent";
import PageDefault from "../../../components/PageDefault";
import TestContainer from "../../../components/test/TestContainer";
import TestQuestion from "../../../components/test/TestQuestion";
import H1 from "../../../constants/Typography";

const CustomTestContainer = styled(TestContainer)`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 600px) {
      padding: 3em;
  }
`

export function StudentTestCheck() {
  return (
    <PageDefault>
      <Header />
      <PageContent>
        <CustomTestContainer>
          <H1>P1 de Gestão</H1>
          <TestQuestion
            question="Nota: 7. Você está de acordo com essa nota?"
            multiple
            items={['Sim', 'Não']}
          />
          <TestQuestion
            question="Qual dos itens a seguir não é uma habilidade geral de gerenciamento?"
            multiple
            items={['Motivar a equipe de projeto.', 'Comprar e contratar.', 'Vendas e marketing.', 'Contratos e legislação comercial.']}
            rightIndex={0}
            checkedIndex={1}
          />
        </CustomTestContainer>
      </PageContent>
    </PageDefault>
  )
}
