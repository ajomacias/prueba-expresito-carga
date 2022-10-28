import { NextFunction, Request  } from 'express'
import { AppResponse, error } from '../types';

function errorHandler(err : error, req : Request, res : AppResponse, next : NextFunction){

    
    return res.status(err.status)
    .json({
        success : false,
        error : err.message
    })

}

export { errorHandler }