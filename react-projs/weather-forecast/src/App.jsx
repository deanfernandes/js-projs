import "./App.css";
import { useState, useEffect } from "react";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [weeklyForecast, setWeeklyForecast] = useState(null);

  useEffect(() => {
    //TODO: fetch from API
    //simulate loading
    window.setTimeout(() => {
      const json = `
    {
      "weeklyForecast":
      [
        {
          "date": "20/05/2025",
          "summary": "Hot",
          "temperatureC": 20
        },
        {
          "date": "21/05/2025",
          "summary": "Freezing",
          "temperatureC": -5
        },
        {
          "date": "22/05/2025",
          "summary": "Freezing",
          "temperatureC": -2
        },
        {
          "date": "23/05/2025",
          "summary": "Mild",
          "temperatureC": 7
        },
        {
          "date": "24/05/2025",
          "summary": "Hot",
          "temperatureC": 30
        },
        {
          "date": "25/05/2025",
          "summary": "Mild",
          "temperatureC": 15
        },
        {
          "date": "26/05/2025",
          "summary": "Mild",
          "temperatureC": 12
        }
      ]
    }
      `;

      setWeeklyForecast(JSON.parse(json).weeklyForecast);
    }, 2000);
  }, []);

  return (
    <>
      <h1>Weather Forecast:</h1>
      <div className="container">
        <div className="sidebar">
          <p>sidebar</p>
        </div>
        {weeklyForecast ? (
          <WeatherForecast forecast={weeklyForecast}></WeatherForecast>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </>
  );
}

export default App;
