//* Libraries imports
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

//* Hooks imports
import { useGroups } from "@hooks/useGroups";

//* Components imports
import { Header } from "@components/Header";
import * as S from "./styled";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function NewGroups() {
  const [name, setName] = useState('');

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('players', { group: name });
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />

        <Highlight
          title="Novo grupo"
          subtitle="Crie um grupo para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setName}
        />
        <Button
          label="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />

      </S.Content>
    </S.Container>
  )
}