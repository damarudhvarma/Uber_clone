import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import userRouter from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import captainRouter from './routes/captainRoutes.js';
import mapsRouter from './routes/mapsRoutes.js';
import rideRouter from './routes/rideRoutes.js';


const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users',userRouter);
app.use('/captains',captainRouter);
app.use('/maps',mapsRouter);
app.use('/rides',rideRouter);



export default  app;