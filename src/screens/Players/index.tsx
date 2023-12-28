//* Libraries imports


//* Components imports
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import * as S from "./styled";

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title="Nome do grupo" subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </S.Form>
    </S.Container>
  );
}