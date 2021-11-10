import styled from "styled-components";

import Colors from "../../constants/Colors";

const LoginButton = styled.button`
    display: block;
    background: ${props => props.color};
    padding: 18px;
    border-radius: 8px;
    margin: 10px;
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    border: none;
    width: 100%;
    max-width: 550px;
    color: ${Colors.white};
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background: ${
            props => 
            props.color === Colors.primaryGreen ? Colors.darkPrimaryGreen : Colors.darkSecondaryGreen
        };
    }
`;

export default LoginButton;
