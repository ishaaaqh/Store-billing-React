import { demoState } from '../shared/demoState';
import * as ActionTypes from '../actions/actionTypes';

export const demoReducer = (state = demoState, action) => {
  switch (action.type) {
    case ActionTypes.DemoEvent:
      return state.concat(action.payload)
    default:
      return state;
  }
};
