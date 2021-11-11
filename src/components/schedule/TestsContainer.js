import styled from "styled-components";

import Colors from "../../constants/Colors";

const TestsContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    background: ${Colors.strangeGreen};
    align-items: center;
    padding: 20px;
    margin-bottom: 15px;
`;

export default TestsContainer;
