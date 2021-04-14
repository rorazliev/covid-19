import axios, { AxiosPromise } from 'axios';
import Overall from '../types/Overall';
import Timeline from '../types/Timeline';

// Base URL for API calls
export const baseURL = 'https://disease.sh/v3/covid-19';

// Axios instance for API calls
export const instance = axios.create({
  baseURL,
});

// Get the overall data for the USA
export const getUsaTotal = (): AxiosPromise<Overall> => instance.get(
  '/countries/usa?strict=true',
);

// Get the timeline for the USA
export const getUsaTimeline = (): AxiosPromise<Timeline> => instance.get(
  '/nyt/usa',
);

// Get the overall data for a given state
export const getStateTotal = (
  name: string,
): AxiosPromise<Overall> => instance.get(`/states/${name}`);

// Get the timeline for a given state
export const getStateTimeline = (
  name: string,
): AxiosPromise<Timeline> => instance.get(`/nyt/states/${name}?lastdays=all`);
