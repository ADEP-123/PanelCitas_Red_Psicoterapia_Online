import express from 'express';
import cookieParser from 'cookie-parser';
import initApiRoutes from './routes/routes.js';

const appExpress = express();
appExpress.use(express.json())
appExpress.use(cookieParser());
appExpress.use('/api', initApiRoutes());

export default appExpress;