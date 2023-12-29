//* Libraries imports
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  const { groups, loadGroups, loading } = useGroups();

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('new');
  }

  return (
    <S.Container>
      <Header />
      <Highlight
        title="Grupos"
        subtitle="Aqui você pode criar e gerenciar seus grupos"
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroupCard
          key={item.id}
          title={item.name}
          onPress={() => navigation.navigate('players', { group: item.id })}
        />}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty message="Que tal cadastrar a primeira turma?" />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        refreshing={loading}
        onRefresh={loadGroups}
      />

      <Button
        label="Criar grupo"
        onPress={handleNewGroup}
      />

    </S.Container>
  )
}
