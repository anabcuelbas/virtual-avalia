import styled from "styled-components";

import Colors from "../constants/Colors";

const PageDefault = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background: ${props => props.color ? props.color : Colors.background};
`;

export default PageDefault;
