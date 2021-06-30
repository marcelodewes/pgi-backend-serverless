const { ok } = require('../../src/helpers/http-helper');
const sut = require('../../src/handlers/example');

describe('Example handler', () => {
  it('Should return 200 on success', async () => {
    const httpResponse = await sut.handler();
    const body = { message: 'Example handler' };
    expect(httpResponse).toStrictEqual(ok(body));
  });
});
