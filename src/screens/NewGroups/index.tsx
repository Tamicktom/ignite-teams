//* Libraries imports

//* Hooks imports
import { useGroups } from "@hooks/useGroups";

//* Components imports
import { Header } from "@components/Header";
import * as S from "./styled";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

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

        <Input placeholder="Nome da turma" />
        <Button label="Criar" style={{ marginTop: 20 }} />

      </S.Content>
    </S.Container>
  )
}