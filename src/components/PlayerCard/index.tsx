//* Libraries imports

//* Components imports
import { ButtonIcon } from '@components/ButtonIcon';
import * as S from './styled';

type Props = {
  name: string;
  onRemove?: () => void;
}

export function PlayerCard(props: Props) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{props.name}</S.Name>
      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={props.onRemove}
      />
    </S.Container>
  );
}