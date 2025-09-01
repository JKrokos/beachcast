import type { BeachGroup } from '../types/weather';

export const beaches: BeachGroup = {
  north: [
    { name: "Agios Sostis", coordinates: { lat: 37.483843, lon: 25.359521 } },
    { name: "Panormos", coordinates: { lat: 37.475977, lon: 25.360057 } },
    { name: "Ftelia", coordinates: { lat: 37.461264, lon: 25.37703 } },
  ],
  south: [
    { name: "Platis Gialos", coordinates: { lat: 37.414042, lon: 25.344155 } },
    { name: "Psarou", coordinates: { lat: 37.41573, lon: 25.337632 } },
    { name: "Paraga", coordinates: { lat: 37.407821, lon: 25.349444 } },
  ],
  west: [
    { name: "Agios Ioannis", coordinates: { lat: 37.421633, lon: 25.311086 } },
    { name: "Kapari", coordinates: { lat: 37.425395, lon: 25.304766 } },
  ],
  east: [
    { name: "Tigani", coordinates: { lat: 37.461076, lon: 25.460527 } },
    { name: "Merchia", coordinates: { lat: 37.47116, lon: 25.428323 } },
  ],
};
