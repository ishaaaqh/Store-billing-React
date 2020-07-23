import * as ActionTypes from './actionTypes';

export const addDemoEvent = (text) => ({
  type: ActionTypes.DemoEvent,
  payload: {
    text: text
  }
});
