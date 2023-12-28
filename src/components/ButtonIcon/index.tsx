//* Libraries imports
import type { TouchableOpacityProps } from 'react-native';

//* Components imports
import * as S from "./styled";

interface Props extends TouchableOpacityProps { }

export function ButtonIcon({ ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon name="home" type="PRIMARY" />
    </S.Container>
  );
}