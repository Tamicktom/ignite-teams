//* Libraries imports
import { useState } from "react";
import { FlatList } from "react-native";

//* Components imports
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

//* Hooks imports
import { useGroups } from "@hooks/useGroups";

//* Styles imports
import * as S from "./styles";

export function Groups() {
  const { groups } = useGroups();

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
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty message="Que tal cadastrar a primeira turma?" />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button
        label="Criar grupo"
        onPress={() => { }}
      />

    </S.Container>
  )
}
