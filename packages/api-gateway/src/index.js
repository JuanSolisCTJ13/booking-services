// Internal dependencies
const HttpServer = require('./drivers/http/server');

// eslint-disable-next-line no-console
HttpServer.start().catch((err) => console.error('Somethin went wrong running server', err));
