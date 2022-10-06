import moment from "moment";

import './style.css'

type Weather = {
  weatherName: string;
  country: string;
  temperature: number;
  description: string;
};
type WeatherDetailsProps = {
  weather: Weather;
};

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
  const { weatherName, country, temperature, description } = weather;
  console.log('test in side')
  return (
    <>
      <div className="location-box">
        <div className="location">
          {weatherName}, {country}
        </div>
        <div className="date">{moment().format("dddd DD, MMM YYYY")}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{Math.round(temperature)}°c</div>
        <div className="weather">{description}</div>
      </div>
    </>
  );
};

export default WeatherDetails;
