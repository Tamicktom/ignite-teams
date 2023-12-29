//* Libraries imports
import { useNavigation } from "@react-navigation/native";

//* Local imports
import logoImage from "@assets/logo.png";

//* Components imports
import * as S from "./styled";

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header(props: HeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate('groups');
  }

  return (
    <S.Container>
      {
        props.showBackButton &&
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      }
      <S.Logo source={logoImage} />
    </S.Container>
  )
}