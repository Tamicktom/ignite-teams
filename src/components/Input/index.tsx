//* Libraries imports
import type { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

//* Components imports
import * as S from "./styled";


interface Props extends TextInputProps { }

export function Input({ ...rest }: Props) {
  const theme = useTheme();

  return (
    <S.Container
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  )
}