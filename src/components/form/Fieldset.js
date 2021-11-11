import styled from "styled-components";

import Colors from '../../constants/Colors'

export const Fieldset = styled.fieldset`
  background-color: ${Colors.lightBlue};
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
  padding: 1.5rem;
  border: none;
  font-family: 'Special Elite';

  textarea {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    padding: 0.5rem;
    border: none;
    background-color: ${Colors.white};
    font-family: 'Special Elite';
    margin-bottom: 1rem;
  }
`
