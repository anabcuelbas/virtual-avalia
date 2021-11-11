import styled from 'styled-components';

import Colors from '../../constants/Colors';

const TestContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2em;
    width: 90%;
    max-width: 1084px;
    align-self: center;
    margin-top: 50px;
    border-radius: 20px;
    background: ${Colors.backgroundGreen};
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    position: relative;
    align-items: center;
`;

export default TestContainer;
