import type { Beach } from "../types/weather";

interface BeachLinkProps {
  beach: Beach;
}

export const BeachLink = ({ beach }: BeachLinkProps) => (
  <a
    href={`https://maps.google.com?q=${beach.coordinates.lat},${beach.coordinates.lon}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/40 hover:bg-white/60 backdrop-blur-sm rounded-xl p-4 block transition-all duration-200 hover:shadow-md group"
  >
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium text-slate-800 group-hover:text-cyan-700 transition-colors">
          {beach.name}
        </h4>
        <p className="text-sm text-slate-600 mt-1">Tap to view on map</p>
      </div>
      <div className="text-2xl transition-transform">🏖️</div>
    </div>
  </a>
);
