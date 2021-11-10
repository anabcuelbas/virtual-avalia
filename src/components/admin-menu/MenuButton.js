import styled from "styled-components";
import Colors from "../../constants/Colors";

const MenuButton = styled.button`
  display: block;
  background: ${(props) => props.color};
  padding: 18px;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
  border: none;
  width: 75%;
  max-width: 550px;
  color: ${Colors.white};
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.color === Colors.primaryGreen
        ? Colors.accentOrange
        : Colors.darkSecondaryGreen};
  }
`;

export default MenuButton;

export const LogoutButton = styled(MenuButton)`
  position: relative;

  &:hover {
    background: ${(props) =>
      props.color === Colors.primaryGreen
        ? Colors.accentOrange
        : Colors.accentRed};
  }
`;

