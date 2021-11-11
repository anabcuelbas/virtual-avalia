import { ReactComponent as Title } from "../../assets/HeaderTitleDesktop.svg";

import styled from "styled-components";

const HeaderTitle = styled(Title)`
    height: 70px;
    margin-top: 10px;
    margin-left: 10px;

    @media(max-width: 750px) {
        display: none;
    }
`

export default HeaderTitle;
