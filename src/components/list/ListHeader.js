import styled from "styled-components";

import Colors from "../../constants/Colors";

const ListHeader = styled.tr`
    display: flex;
    background-color: ${Colors.darkPrimaryGreen};
    margin: 25px;
    padding: 2px;
    width: 90%;
    border-radius: 10px;
`;

export default ListHeader;
