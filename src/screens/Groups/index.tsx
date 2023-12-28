//* Libraries imports
import { useState } from "react";
import { FlatList } from "react-native";

//* Components imports
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import GroupCard from "@components/GroupCard";

//* Styles imports
import * as S from "./styles";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Grupo 1', 'Grupo 2', 'Grupo 3']);

  return (
    <S.Container>
      <Header />
      <Highlight
        title="Grupos"
        subtitle="Aqui você pode criar e gerenciar seus grupos"
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        style={{ width: '100%' }}
      />

    </S.Container>
  )
}
