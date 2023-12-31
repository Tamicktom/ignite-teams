//* Libraries import
import type { TouchableOpacityProps } from "react-native";

//* Components import
import type { ButtonTypeStyleProps } from './styled';
import * as S from "./styled";

interface Props extends TouchableOpacityProps {
  label: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ label, type = "PRIMARY", ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}