import 'dotenv/config';
import type { NextApiRequest, NextApiResponse } from 'next';

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type List = {
  dt: number;
  main: Main;
  weather: Weather[];
  dt_txt: string;
};

type Coord = {
  lat: number;
  lon: number;
};

type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};

export type WeatherResponse = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  dt: number;
  id: number;
  name: string;
  cod: number;
};

const baseUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = process.env.OPENWEATHER_API_KEY || '';
const units = 'metric';

const isNotNullOrUndefined = <T extends Object>(
  input: null | undefined | T,
): input is T => input != null;

const getApiUrl = (endpoint: string, lat: number, lon: number) => {
  const url = new URL(`${baseUrl}${endpoint}`);
  url.searchParams.append('units', units);
  url.searchParams.append('lat', `${lat}`);
  url.searchParams.append('lon', `${lon}`);
  url.searchParams.append('appid', apiKey);
  return url.href;
};

const getForecast = async (lat: number, lon: number) => {
  const href = getApiUrl('/forecast', lat, lon);
  try {
    const resp = await fetch(href);
    const data: ForecastResponse = await resp.json();
    return data;
  } catch (error) {
    return null;
  }
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ForecastResponse>,
) => {
  const lat = parseFloat(`${req.query?.lat}`);
  const lon = parseFloat(`${req.query?.lon}`);
  if (isNaN(lat) || isNaN(lon)) return res.status(400);

  let data = await getForecast(lat, lon);
  if (data == null) return res.status(500);

  let lastDate = 0;
  data.list = data?.list
    ?.map((forecast) => {
      const date = new Date(0);
      date.setUTCSeconds(forecast.dt);
      const monthDate = date.getDate();
      if (monthDate == lastDate) return null;
      lastDate = monthDate;
      return forecast;
    })
    ?.filter(isNotNullOrUndefined);

  res.status(200).json(data);
};

export default handler;