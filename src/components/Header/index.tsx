//* Libraries imports

//* Local imports
import logoImage from "@assets/logo.png";

//* Components imports
import * as S from "./styled";

export function Header() {
  return (
    <S.Container>
      <S.Logo source={logoImage} />
    </S.Container>
  )
}