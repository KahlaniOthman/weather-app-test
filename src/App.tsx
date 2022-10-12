import React, { useState, useMemo } from "react";
import { useQuery } from "react-query";

import WeatherDetails from "components/weather-details";
import SearchBanner from "components/search-banner";

import { fetchWeather } from "libs";

function App() {
  const [search, setSearch] = useState("Paris");
  const { data: weather, isLoading } = useQuery(
    ["fetchWeather", search],
    fetchWeather
  );

  const handleSetSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearch(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  };

  const weatherInfo = useMemo(
    () =>
      weather?.name && {
        weatherName: weather?.name,
        country: weather?.sys?.country,
        temperature: weather?.main?.temp,
        description: weather?.weather?.[0]?.main,
      },
    [weather]
  );

  return (
    <div
      className={
        weatherInfo
          ? weatherInfo.temperature > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <SearchBanner setSearch={handleSetSearch} />
        {weather?.cod === 200 && <WeatherDetails weather={weatherInfo} />}
        {isLoading && <div className="weather-info">Loading...</div>}
        {(weather?.cod === "400" || weather?.cod === "404") && <div className="weather-info">{weather.message}</div>}
      </main>
    </div>
  );
}

export default App;

/* commit 4 */
