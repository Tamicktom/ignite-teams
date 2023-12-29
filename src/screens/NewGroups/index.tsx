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
  const { saveGroup } = useGroups();

  const navigation = useNavigation();

  const handleNewGroup = async () => {
    if (name) {
      const tmp = await saveGroup(name);
      navigation.navigate('players', { group: tmp.id });
    }
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