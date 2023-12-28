//* Libraries imports
import { useState } from "react";
import { FlatList } from "react-native";

//* Components imports
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import * as S from "./styled";

export function Players() {
  const [players, setPlayers] = useState<number>(2);

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

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter title={item} />
          )}
          horizontal
        />
        <S.NumbersOfPlayers>
          {players} pessoas
        </S.NumbersOfPlayers>
      </S.HeaderList>

      <FlatList
        data={["Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4", "Jogador 5"]}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
        ListEmptyComponent={<ListEmpty message="" />}
      />

    </S.Container>
  );
}