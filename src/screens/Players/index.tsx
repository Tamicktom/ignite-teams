//* Libraries imports


//* Components imports
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import * as S from "./styled";

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title="Nome do grupo" subtitle="adicione a galera e separe os times" />

      <ButtonIcon icon="home" type="PRIMARY" />
    </S.Container>
  );
}