//* Libraries imports
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//* Local imports
import { randomId } from "@utils/id";

type Group = {
  name: string;
  id: string;
};

export function useGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadGroups() {
    setLoading(true);
    const groupsStorage = await AsyncStorage.getItem("groups");
    if (groupsStorage) {
      setGroups(JSON.parse(groupsStorage));
    }
    setLoading(false);
  }

  async function saveGroup(group: string) {
    const tmp = { name: group, id: randomId() };
    const newGroups = [...groups, tmp];
    await AsyncStorage.setItem("groups", JSON.stringify(newGroups));
    setGroups(newGroups);
    loadGroups();
    return tmp;
  }

  async function deleteGroup(id: string) {
    const newGroups = groups.filter((group) => group.id !== id);
    await AsyncStorage.setItem("groups", JSON.stringify(newGroups));
    setGroups(newGroups);
    loadGroups();
  }

  useEffect(() => {
    loadGroups();
  }, []);

  return { groups, saveGroup, deleteGroup, loading, loadGroups };
}
