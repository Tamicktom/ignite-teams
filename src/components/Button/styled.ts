//* Libraries imports
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${(props) =>
    props.type === "PRIMARY"
      ? props.theme.COLORS.GREEN_700
      : props.theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`;
