import {setupServer} from 'msw/node';
import {rest} from 'msw';

let server= undefined;

const rootUrl = 'http://api.backend.dev';

const handlers = [
  rest.put(`${rootUrl}/api/v1/something`, (req, res, ctx) => {
    return res(ctx.json({}));
  }),
];

export const getMockingServer = () => {
  if (!server) {
    server = setupServer(...handlers);
  }

  return server;
};

getMockingServer();
