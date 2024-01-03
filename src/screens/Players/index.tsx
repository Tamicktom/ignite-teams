//* Libraries imports
import { useState } from "react";
import { FlatList, Alert, Keyboard } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

//* Hooks imports
import { useGroups } from "@hooks/useGroups";
import { usePlayersByGroup } from "@hooks/usePlayers";

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
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;

  const [newPlayerName, setNewPlayerName] = useState("");
  const [teams, setTeams] = useState<string[]>(["Time A", "Time B"]);
  const [selectedTeam, setSelectedTeam] = useState("Time A");
  const { groups, deleteGroup } = useGroups();

  const { players, deletePlayer, loadPlayers, savePlayer } = usePlayersByGroup(params.group);
  const actualSelectedTeamPlayers = players.filter(item => item.team_id === selectedTeam);

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
            //delete all players from both teams
            await Promise.all(players.map(async (item) => {
              await deletePlayer(item.id);
            }));
            await deleteGroup(params.group);
            navigation.navigate("groups");
          }
        }
      ]
    )
  }

  const handleAddPlayer = async () => {
    if (!newPlayerName) {
      return Alert.alert("Digite o nome da pessoa");
    }

    await savePlayer(newPlayerName, selectedTeam);

    setNewPlayerName("");
    Keyboard.dismiss();
  }

  const handleRemovePlayer = async (id: string) => {
    await deletePlayer(id);
  }

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={group?.name ?? ""} subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={teams}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === selectedTeam}
              onPress={() => setSelectedTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumberOfPlayers>
          {
            actualSelectedTeamPlayers.length === 0
              ? "Ninguém no time :("
              : actualSelectedTeamPlayers.length === 1
                ? "1 pessoa"
                : `${actualSelectedTeamPlayers.length} pessoas`
          }
        </S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={actualSelectedTeamPlayers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => { handleRemovePlayer(item.id) }}
          />
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