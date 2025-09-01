import Header from "./components/Header";
import Weather from "./components/Weather";
import Beaches from "./components/Beaches";
import { WeatherProvider } from "./components/WeatherProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Weather />
          <Beaches />
        </main>
        <Footer />
      </div>
    </WeatherProvider>
  );
}

export default App;
