import {
  greeting,
  name,
  NAME_CHANGE,
  CHANGE_GREETING
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
  it('changes the greeting', () => {
    const payload = 'Howdy';

    const state = greeting('', {
      type: CHANGE_GREETING,
      payload
    });

    expect(state).toBe(payload);
  });

});