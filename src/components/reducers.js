export const CHANGE_GREETING = 'CHANGE_GREETING';
export const CHANGE_NAME = 'CHANGED_NAME';

export const getGreeting = state => state.greeting;
export const getName = state => state.name;

export function greeting(state = '', { type, payload }) {
  if(type === CHANGE_GREETING) return payload;
  return state;
}

export function name(state = '', { type, payload }) {
  if(type === CHANGE_NAME) return payload;
  return state;
}