import styled from "styled-components";
import Colors from "../../constants/Colors";

const HeaderLogoutButton = styled.button`
  background: ${(props) => props.color};
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  margin-right: 20px;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
  border: none;
  width: 200px;
  max-width: 550px;
  color: ${Colors.black};
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 0;

  &:hover {
    background: ${(props) =>
      props.color === Colors.primaryGreen
        ? Colors.accentOrange
        : Colors.accentRed};
  }
`;

export default HeaderLogoutButton;
