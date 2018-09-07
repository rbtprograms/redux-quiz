export const CHANGE_GREETING = 'CHANGE_GREETING';
export const NAME_CHANGE = 'CHANGED_NAME';

export const getGreeting = state => state.greeting;
export const getName = state => state.name;

export function greeting(state = 'Hello', { type, payload }) {
  if(type === CHANGE_GREETING) return payload;
  return state;
}

export function name(state = '', { type, payload }) {
  if(type === NAME_CHANGE) return payload;
  return state;
}