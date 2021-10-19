import styled from "styled-components";

import Colors from "../../constants/Colors";

const LoginInput = styled.input`
    display: block;
    box-sizing: border-box;
    background: ${Colors.white};
    margin: 0 32px 32px 32px;
    padding: 18px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    border: none;
    width: 100%;
    max-width: 550px;
    color: ${Colors.black};
    font-size: 16px;
    cursor: pointer;
`;

export default LoginInput;