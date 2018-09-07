import { CHANGE_GREETING, CHANGE_NAME } from './reducers';

export const updateGreeting = greeting => {
  return {
    type: CHANGE_GREETING,
    payload: greeting
  };
};

export const updateName = name => {
  return {
    type: CHANGE_NAME,
    payload: name
  };
};