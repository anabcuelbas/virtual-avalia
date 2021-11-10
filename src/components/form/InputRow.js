import styled from "styled-components";

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1.5rem;

    > label {
      margin-bottom: 0.5rem;
    }
  }
`
