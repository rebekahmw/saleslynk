import type { ReactNode } from 'react';

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
    <div>
      {props.forecast.map((forecast, i) => (
        <div
          key={i}
        //   active={forecast.active}
          onClick={forecast.setCurrent}
        >
          <p>{forecast.weekday}</p>
          {forecast.icon}
          <p>{forecast.temperatures}</p>
        </div>
      ))}
    </div>
  );
};