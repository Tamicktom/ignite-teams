//* Libraries imports
import { useEffect, useState } from "react";

export const useGroups = () => {
  const [groups, setGroups] = useState<string[]>([]);

  return {
    groups,
    setGroups,
  };
};
