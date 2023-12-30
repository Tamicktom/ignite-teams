//* Libraries imports
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//* Local imports
import { randomId } from "@utils/id";

type Player = {
  id: string;
  group_id: string;
  team_id: string;
  name: string;
};

export function usePlayersByGroup(group_id: string) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const storageKey = `players_${group_id}`;

  async function loadPlayers() {
    setLoading(true);
    const playersStorage = await AsyncStorage.getItem(storageKey);
    if (playersStorage) {
      setPlayers(JSON.parse(playersStorage));
    } else {
      setPlayers([]);
    }
    setLoading(false);
  }

  async function savePlayer(name: string, team_id: string) {
    const tmp: Player = { name, id: randomId(), group_id, team_id };
    const newPlayers = [...players, tmp];
    await AsyncStorage.setItem(storageKey, JSON.stringify(newPlayers));
    setPlayers(newPlayers);
    loadPlayers();
    return tmp;
  }

  async function deletePlayer(id: string) {
    const newPlayers = players.filter((player) => player.id !== id);
    await AsyncStorage.setItem(storageKey, JSON.stringify(newPlayers));
    setPlayers(newPlayers);
    loadPlayers();
  }

  useEffect(() => {
    loadPlayers();
  }, []);

  return { players, savePlayer, deletePlayer, loading, loadPlayers };
}
