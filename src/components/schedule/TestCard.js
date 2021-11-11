import styled from "styled-components";

import Colors from "../../constants/Colors";

const TestCard = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    background: ${Colors.white};
    height: 3em;
    align-items: center;
    padding: 10px;
    font-size: 1.3em;
    margin-bottom: 15px;
`;

export default TestCard;
