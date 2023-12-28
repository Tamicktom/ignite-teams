//* Libraries imports
import type { TouchableOpacityProps } from 'react-native';
import type { MaterialIcons } from "@expo/vector-icons";

//* Components imports
import * as S from "./styled";

interface Props extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: S.ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} type={type} />
    </S.Container>
  );
}