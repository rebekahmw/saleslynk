import type { ReactNode } from 'react';
import weather from "../../styles/dashboard/Weather.module.scss"
import style from "../../utils/styles";

type ForecastItemProps = {
  active: boolean;
};

export type Forecast = {
  weekday: string;
  icon: ReactNode;
  temperatures: string;
  setCurrent: () => void;
} & ForecastItemProps;

type ForecastProps = {
  forecast: Forecast[];
};

export const Forecast = (props: ForecastProps) => {
  return (
    <div className={style([weather.container])}>
    <div className={style([weather.weeklyWeather])}>
      {props.forecast.map((forecast, i) => (
        <div
          key={i}
          className={style([weather.weeklyWeatherItem])}
        //   active={forecast.active}
          onClick={forecast.setCurrent}
        >
          <p>{forecast.weekday}</p>
          {forecast.icon}
          <p>{forecast.temperatures}</p>
        </div>
      ))}
    </div>
    </div>
  );
};