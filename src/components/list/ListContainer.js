import styled from "styled-components";
import Colors from "../../constants/Colors";

const ListContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background: ${Colors.backgroundGreen};
    width: 100%;
    position: relative;
    padding: 10px;
`;

export default ListContainer;
