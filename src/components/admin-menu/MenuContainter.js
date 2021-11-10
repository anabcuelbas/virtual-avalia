import styled from "styled-components";

import Colors from "../../constants/Colors";

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 500px;
    align-self: center;
    margin-bottom: 50px;
    border-radius: 20px;
    background: ${Colors.backgroundGreen};
`;

export default MenuContainer;