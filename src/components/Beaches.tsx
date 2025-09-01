import { getWindDirection } from "../utils/windUtils";
import { getBeachesForWindDirection } from "../utils/beachUtils";
import { BeachLink } from "./BeachLink";
import { useWeather } from "../hooks/useWeather";

const Beaches = () => {
  const { weather, loading, error } = useWeather();

  if (loading)
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="animate-pulse text-slate-600">
            Finding perfect beaches...
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-50/80 backdrop-blur-sm rounded-2xl p-6 text-center text-red-600">
          {error}
        </div>
      </div>
    );

  if (!weather) return null;

  const windDirection = getWindDirection(weather.wind?.deg || 0);
  const suggestedBeaches = getBeachesForWindDirection(windDirection);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
        <h3 className="text-2xl font-light text-slate-800 mb-2 text-center">
          Perfect Beaches
        </h3>
        <p className="text-center text-slate-600 mb-6 font-light">
          For {windDirection} wind conditions
        </p>

        {suggestedBeaches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestedBeaches.map((beach, index) => (
              <BeachLink key={index} beach={beach} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🏖️</div>
            <p className="text-slate-600">All beaches are great today!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beaches;
