import express from 'express';
import { APP } from './config';
import morgan from 'morgan'
import { errorHandler } from './middelware';
import { userRouter } from './feature/user';
import cors from 'cors'
const app = express();
const port = APP.PORT;

app.use(cors({ origin : '*' }))
app.use(morgan('dev'));
app.use(express.json());

app.set('PORT', port);

app.use('/api/prueba-tecnica/user', userRouter);

app.get('*', (req, res, next)=>{
     next({ status : 404, message : 'feature not found' });
})

app.use(errorHandler);

export { app };