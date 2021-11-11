import styled from "styled-components";
import Colors from "../../constants/Colors";

export const Input = styled.input`
  &:not([type="file"]):not([type="radio"]) {
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    padding: 0.5rem;
    border: none;
    background-color: ${Colors.white};
    font-family: 'Special Elite';
  }

  &[type="radio"] {
    margin-right: 1rem;
  }

  &[type="file"] {
    font-size: 0.7rem
  }
`
