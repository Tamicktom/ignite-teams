//* Libraries imports
import { ActivityIndicator } from "react-native";

//* Styles imports
import * as S from "./styled";

export function Loading() {
  return (
    <S.Container>
      <S.LoadIndicator />
    </S.Container>
  );
}