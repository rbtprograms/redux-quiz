import { CHANGED_GREETING, CHANGED_NAME } from './reducers';

export const updateGreeting = greeting => {
  return {
    type: CHANGED_GREETING,
    payload: greeting
  };
};

export const updateName = name => {
  return {
    type: CHANGED_NAME,
    payload: name
  };
};