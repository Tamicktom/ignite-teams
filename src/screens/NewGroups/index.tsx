//* Libraries imports

//* Hooks imports
import { useGroups } from "@hooks/useGroups";

//* Components imports
import { Header } from "@components/Header";
import * as S from "./styled";
import { Highlight } from "@components/Highlight";

export function NewGroups() {
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Novo grupo"
          subtitle="Crie um grupo para adicionar as pessoas"
        />
      </S.Content>
    </S.Container>
  )
}