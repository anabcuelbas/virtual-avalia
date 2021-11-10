import { ReactComponent as Title } from "../../assets/HeaderTitleMobile.svg";

import styled from "styled-components";

const HeaderTitle = styled(Title)`
    height: 60px;
    margin: 10px;

    @media(min-width: 750px) {
        display: none;
    }
`

export default HeaderTitle;
