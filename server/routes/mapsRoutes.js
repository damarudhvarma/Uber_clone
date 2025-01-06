import {  Router } from 'express';
import { authUser } from '../middlewares/authMiddleware.js';
import { getCoordinates, getDistanceController,getAutoCompletionSuggestionsController } from '../controllers/mapController.js';
import { query } from 'express-validator';


const mapsRouter = Router();

  mapsRouter.get('/get-coordinates',
    query('address').notEmpty().isString().isLength({ min: 3 }).withMessage('Address must be at least 3 characters long'),
    authUser,getCoordinates);

  mapsRouter.get('/get-distance-time',
    query('origin').notEmpty().isString().isLength({ min: 3 }).withMessage('Origin must be at least 3 characters long'),
    query('destination').notEmpty().isString().isLength({ min: 3 }).withMessage('Destination must be at least 3 characters long'),
    authUser,getDistanceController);
  
  mapsRouter.get('/get-suggestions',
    query('input').notEmpty().isString().isLength({ min: 3 }).withMessage('Input must be at least 3 characters long'),
    authUser,getAutoCompletionSuggestionsController);

   




export default mapsRouter;