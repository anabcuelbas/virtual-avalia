import styled from "styled-components";

import Colors from "../../constants/Colors";

const ListHeader = styled.div`
    display: flex;
    flex: 0;
    flex-direction: row;
    background-color: ${Colors.darkPrimaryGreen};
    margin: 25px;
    padding: 2px;
    width: 90%;
    border-radius: 10px;
`;

export default ListHeader;
