//* Libraries imports
import type { TouchableOpacityProps } from "react-native";

//* Components imports
import * as S from "./styled";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}