//* Libraries imports
import { useEffect, useState } from "react";

export function useGroups() {
  const [groups, setGroups] = useState<string[]>([]);

  return {
    groups,
    setGroups,
  };
}
