import type { Beach } from '../types/weather';
import { beaches } from '../data/beaches';

export const getBeachesForWindDirection = (windDirection: string): Beach[] => {
  const windToBeachMap: Record<string, keyof typeof beaches> = {
    "↓ N": "south",
    "↙ NE": "south", 
    "↘ NW": "south",
    "↑ S": "north",
    "↗ SW": "north",
    "↖ SE": "north",
    "→ W": "east",
    "← E": "west",
  };

  const beachGroup = windToBeachMap[windDirection];
  return beachGroup ? beaches[beachGroup] : [];
};
