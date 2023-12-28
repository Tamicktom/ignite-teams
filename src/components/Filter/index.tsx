//* Libraries imports
import type { TouchableOpacityProps } from "react-native";

//* Components imports
import * as S from "./styled";

interface Props extends TouchableOpacityProps, S.FilterStyleProps {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <S.Container
      isActive={isActive}
      {...rest}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}