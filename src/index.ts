import express from 'express';
const app = express();

import config from 'config'
import router from './routes'

app.use(router);

app.listen(config.get('server.port'));
console.log('API online');
