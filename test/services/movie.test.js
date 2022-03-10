const app = require('../../src/app');

describe('\'movie\' service', () => {
  it('registered the service', () => {
    const service = app.service('movie');
    expect(service).toBeTruthy();
  });
});
