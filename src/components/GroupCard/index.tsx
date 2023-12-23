//* Libraries imports
import type { TouchableOpacityProps } from "react-native";

//* Components imports
import * as S from "./styled";

interface Props extends TouchableOpacityProps {
  title: string;
}

export default function GroupCard({ title, ...props }: Props) {
  return (
    <S.Container {...props}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}