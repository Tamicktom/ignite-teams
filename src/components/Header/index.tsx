//* Libraries imports

//* Local imports
import logoImage from "@assets/logo.png";

//* Components imports
import * as S from "./styled";

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header(props: HeaderProps) {
  return (
    <S.Container>
      {
        props.showBackButton &&
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      }
      <S.Logo source={logoImage} />
    </S.Container>
  )
}