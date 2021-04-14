import {
  AnyAction, applyMiddleware, combineReducers, createStore,
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {
  TypedUseSelectorHook, useSelector as useBaseSelector,
} from 'react-redux';

// Create a root reducer
const rootReducer = combineReducers({});

// Create an new store instance
const store = createStore(rootReducer, applyMiddleware(thunk));

// The root state type
export type State = ReturnType<typeof store.getState>

// Create thunk dispatch type
export type Dispatch = ThunkDispatch<State, unknown, AnyAction>;

// Rewrite useSelector for thunking
export const useSelector: TypedUseSelectorHook<State> = useBaseSelector;

export default store;