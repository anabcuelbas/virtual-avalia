import styled from "styled-components";

import Colors from "../../constants/Colors";
import HeaderTitle from "./HeaderTitle";
import HeaderTitleMobile from "./HeaderTitleMobile";
import LongButton from "../LongButton";


const HeaderStyle = styled.div`
    display: flex;
    height: 80px;
    background-color: ${Colors.darkPrimaryGreen};
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
`;

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderTitle />
            <HeaderTitleMobile />
            <LongButton path="/" name="Logout" backgroundColor={Colors.secondaryGreen} textColor={Colors.white} />
        </HeaderStyle>
    );
}

export default Header;