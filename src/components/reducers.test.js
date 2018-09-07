import {
  NAME_CHANGE,
  UPDATE_GREETING
} from './reducers';

describe('reducers', () => {
  it('has a dummy test', () => {
    const name = NAME_CHANGE;
    const greeting = UPDATE_GREETING;
    console.log(name, greeting);
  });
});