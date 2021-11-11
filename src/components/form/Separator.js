import styled from "styled-components";

import Colors from "../../constants/Colors";

export const Separator = styled.span`
  color: ${Colors.grey};
  font-size: 1.5rem;
  margin: 1.5rem auto;
  display: block;
  text-align: center;
  font-family: 'Special Elite';

  &::before, &::after {
    content: ' --- '
  }
`
