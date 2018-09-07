import {
  // greeting,
  name,
  NAME_CHANGE,
  // UPDATE_GREETING
} from './reducers';

describe('reducers', () => {
  it('changes the name', () => {
    const payload = 'bobby';

    const state = name('', {
      type: NAME_CHANGE,
      payload
    });

    expect(state).toBe(payload);
  });
});