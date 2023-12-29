//* Libraries imports
import { useState } from "react";
import { FlatList, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

//* Hooks imports
import { useGroups } from "@hooks/useGroups";

//* Components imports
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import * as S from "./styled";

type RouteParams = {
  group: string; //id
}

export function Players() {
  const { groups, deleteGroup } = useGroups();
  const [players, setPlayers] = useState<string[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;

  const group = groups.find(item => item.id === params.group);

  const handleRemoveGroup = () => {
    Alert.alert(
      "Remover Turma",
      "Tem certeza que você deseja remover essa turma?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            await deleteGroup(params.group);
            navigation.navigate("groups");
          }
        }
      ]
    )
  }

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={group?.name ?? ""} subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter title={item} />
          )}
          horizontal
        />
        <S.NumberOfPlayers>
          {players.length} pessoas
        </S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time." />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            paddingBottom: 100,
          },
          !players.length && {
            flex: 1,
          }
        ]}
      />

      <Button
        label="Remover Turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />

    </S.Container>
  );
}