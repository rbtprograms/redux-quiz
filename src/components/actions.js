import { CHANGE_GREETING, NAME_CHANGE } from './reducers';

export const updateGreeting = greeting => {
  return {
    type: CHANGE_GREETING,
    payload: greeting
  };
};

export const updateName = name => {
  return {
    type: NAME_CHANGE,
    payload: name
  };
};