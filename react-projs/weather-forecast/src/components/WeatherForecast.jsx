import "./WeatherForecast.css";

export default function WeatherForecast({ forecast }) {
  function getDayFromDate(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);
    const date = new Date(year, month - 1, day); //js month 0-based
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayNames[date.getDay()];
  }

  return (
    <div className="weather-forecast-container">
      {forecast.map((weather, index) => {
        return (
          <div
            key={index}
            className={"weather " + weather.summary.toLowerCase()}
          >
            <h2>{getDayFromDate(weather.date)}</h2>
            <p className={weather.summary.toLowerCase()}>{weather.summary}</p>
            <p className="temp">{weather.temperatureC}</p>
          </div>
        );
      })}
    </div>
  );
}
