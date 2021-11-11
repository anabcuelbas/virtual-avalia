import styled from "styled-components";
import Colors from "../../constants/Colors";

const ListHeaderButton = styled.button`
    display: block;
    background-color: ${Colors.white};
    border-radius: 15px 15px 0 0;
    border: 2px solid ${Colors.backgroundGreen};
    padding: 10px;
    font-size: 16px;
    font-family: Special Elite;

    &:hover{
        background-color: ${Colors.backgroundGreen};
    }
`;

export default ListHeaderButton;
