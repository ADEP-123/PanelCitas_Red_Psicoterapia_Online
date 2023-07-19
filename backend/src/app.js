import express from 'express';
import initApiRoutes from './routes/routes.js';

const appExpress = express();
appExpress.use(express.json())
appExpress.use('/api', initApiRoutes());

export default appExpress;