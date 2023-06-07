const { info } = require('./utiles/logger');
const http = require('http');
const app = require('./app');
const { PORT } = require('./utiles/config');

const server = http.createServer(app);

server.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
