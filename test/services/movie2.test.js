const app = require('../../src/app');

describe('\'movie2\' service', () => {
  it('registered the service', () => {
    const service = app.service('movie-2');
    expect(service).toBeTruthy();
  });
});
