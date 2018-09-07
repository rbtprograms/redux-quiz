import { updateName, updateGreeting } from './actions';
import { CHANGE_GREETING, NAME_CHANGE } from './reducers';
describe('actions', () => {
  
  it('should run updateName action', () => {
    const payload = 'bobby';
    const expectedAction = {
      type: NAME_CHANGE,
      payload
    };
    expect(updateName(payload).type).toEqual(expectedAction.type);
  });

  it('should run updateGreeting action', () => {
    const payload = 'howdy';
    const expectedAction = {
      type: CHANGE_GREETING,
      payload
    };
    expect(updateGreeting(payload).type).toEqual(expectedAction.type);
  });
});