import styled from "styled-components";

import Colors from '../../constants/Colors'

export const Fieldset = styled.fieldset`
  background-color: ${Colors.lightBlue};
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
  padding: 1.5rem;
  border: none;

  textarea {
    width: 100%;
  }
`
