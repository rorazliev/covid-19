import axios, { AxiosPromise } from 'axios';
import { Overall, Timeline } from '../types/types';

// Base URL for API calls
export const baseURL = 'https://disease.sh/v3/covid-19';

// Axios instance for API calls
export const instance = axios.create({
  baseURL,
});

/**
 * Get overall data for the US
 * @returns {AxiosPromise<Overall>}
 */
export const getUsaOverall = (): AxiosPromise<Overall> => instance.get(
  '/countries/usa?strict=true',
);

/**
 * Get timeline data for the US
 * @returns {AxiosPromise<Timeline>}
 */
export const getUsaTimeline = (): AxiosPromise<Timeline> => instance.get(
  '/nyt/usa',
);

/**
 * Get total data for a given state
 * @param {string} name
 * @returns {AxiosPromise<Overall>}
 */
export const getStateOverall = (
  name: string,
): AxiosPromise<Overall> => instance.get(`/states/${name}`);

/**
 * Get timeline data for a given state
 * @param {string} name
 * @returns {AxiosPromise<Timeline>}
 */
export const getStateTimeline = (
  name: string,
): AxiosPromise<Timeline> => instance.get(`/nyt/states/${name}?lastdays=all`);
