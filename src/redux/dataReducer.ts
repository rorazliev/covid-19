/* eslint-disable default-param-last */
import { AxiosPromise } from 'axios';
import { AnyAction } from 'redux';
import * as api from '../api/covid';
import Overall from '../types/Overall';
import Timeline from '../types/Timeline';
import { Dispatch } from './store';

// State type
type State = {
  overall?: Overall,
  timeline?: Timeline,
  isFetching: boolean,
  isError: boolean,
}

// Initial state
const initialState = {
  overall: undefined,
  timeline: undefined,
  isFetching: true,
  isError: false,
};

// Data reducer, common for all pages
const dataReducer = (
  state: State = initialState,
  action: AnyAction,
): State => {
  switch (action.type) {
    case 'DATA/SET_FETCHING':
    case 'DATA/SET_ERROR':
    case 'DATA/SET_OVERALL':
    case 'DATA/SET_TIMELINE':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

const actions = {
  setError: (state: boolean) => ({
    type: 'DATA/SET_ERROR',
    payload: {
      isError: state,
    },
  }),

  setFetching: (state: boolean) => ({
    type: 'DATA/SET_FETCHING',
    payload: {
      isFetching: state,
    },
  }),

  setOverall: (overall?: Overall) => ({
    type: 'DATA/SET_OVERALL',
    payload: {
      overall,
    },
  }),

  setTimeline: (timeline?: Timeline) => ({
    type: 'DATA/SET_TIMELINE',
    payload: {
      timeline,
    },
  }),
};

// Fetch overall and timeline data
export const fetch = (
  state: string | null = null,
) => (dispatch: Dispatch): void => {
  // Start fetching data
  dispatch(actions.setFetching(true));

  // If it works with a certain state data
  if (!state) {
    // Get overall data and timeline
    const overall: AxiosPromise<Overall> = api.getUsaTotal();
    const timeline: AxiosPromise<Timeline> = api.getUsaTimeline();

    Promise.all([overall, timeline]).then(
      ([overallResponse, timelineResponse]) => {
        const overalllData = overallResponse.data;
        const timelineData = timelineResponse.data;

        dispatch(actions.setOverall(overalllData));
        dispatch(actions.setTimeline(timelineData));
      },
    ).catch(() => {
      dispatch(actions.setError(true));
    });
  // If it works with the nationwide data
  } else {
    const overall: AxiosPromise<Overall> = api.getStateTotal(state);
    const timeline: AxiosPromise<Timeline> = api.getStateTimeline(state);

    Promise.all([overall, timeline]).then(
      ([overallResponse, timelineResponse]) => {
        const overallData = overallResponse.data;
        const timelineData = timelineResponse.data;

        dispatch(actions.setOverall(overallData));
        dispatch(actions.setTimeline(timelineData));
      },
    ).catch(() => {
      dispatch(actions.setError(true));
    });
  }

  // End fetching data
  dispatch(actions.setFetching(false));
};

// Reset the state
export const reset = () => (dispatch: Dispatch): void => {
  dispatch(actions.setError(false));
  dispatch(actions.setFetching(true));
  dispatch(actions.setOverall(undefined));
  dispatch(actions.setTimeline(undefined));
};

export default dataReducer;
