/* eslint-disable default-param-last */
import { AxiosPromise } from 'axios';
import { AnyAction } from 'redux';
import * as api from '../api/api';
import { Overall, Timeline } from '../types/types';
import { Dispatch } from './store';

// Define the state type
type State = {
  overall: Overall,
  timeline: Timeline,
  isFetching: boolean,
  isError: boolean,
}

// Create the initial state
const initialState = {
  overall: {} as Overall,
  timeline: {} as Timeline,
  isFetching: true,
  isError: false,
};

/**
 * Data reducer function
 * @param {State} state
 * @param {AnyAction} action
 * @returns {State}
 */
const dataReducer = (
  state: State = initialState,
  action: AnyAction,
): State => {
  switch (action.type) {
    case 'DATA/SET_OVERALL':
    case 'DATA/SET_TIMELINE':
    case 'DATA/SET_IS_FETCHING':
    case 'DATA/SET_IS_ERROR':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

// A collection of action creators
const actions = {
  setOverall: (overall: Overall) => ({
    type: 'DATA/SET_OVERALL',
    payload: {
      overall,
    },
  }),

  setTimeline: (timeline: Timeline) => ({
    type: 'DATA/SET_TIMELINE',
    payload: {
      timeline,
    },
  }),

  setIsFetching: (state: boolean) => ({
    type: 'DATA/SET_IS_FETCHING',
    payload: {
      isFetching: state,
    },
  }),

  setIsError: (state: boolean) => ({
    type: 'DATA/SET_IS_ERROR',
    payload: {
      isError: state,
    },
  }),
};

/**
 * Fetch data from the server
 * @param {string | null} name
 * @returns {void}
 */
export const fetch = (
  name: string | null = null,
) => (dispatch: Dispatch): void => {
  // Get Overall API call promise
  const overallPromise: AxiosPromise<Overall> = name
    ? api.getStateOverall(name) : api.getUsaOverall();

  // Get Timeline API call promise
  const timelinePromise: AxiosPromise<Timeline> = name
    ? api.getStateTimeline(name) : api.getUsaTimeline();

  // Wait for promises to return response
  Promise.all([overallPromise, timelinePromise]).then(
    ([overallResponse, timelineResponse]) => {
      // Get data
      const overall = overallResponse.data;
      const timeline = timelineResponse.data;

      // Set data
      dispatch(actions.setOverall(overall));
      dispatch(actions.setTimeline(timeline));
    },
  ).catch(() => {
    dispatch(actions.setIsError(true));
  }).finally(() => {
    dispatch(actions.setIsFetching(false));
  });
};

/**
 * Reset the state on component will unmount
 * @returns {void}
 */
export const reset = () => (dispatch: Dispatch): void => {
  dispatch(actions.setOverall({} as Overall));
  dispatch(actions.setTimeline({} as Timeline));
  dispatch(actions.setIsFetching(true));
  dispatch(actions.setIsError(false));
};

export default dataReducer;
