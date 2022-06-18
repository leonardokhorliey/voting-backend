import  { Response } from 'express';

interface StatusObject {
    200: string
    201: string
    204: string
    400: string
    401: string
    403: string
    404: string
    405: string
    500: string
}
  
interface JSONResponse {
    data: any | boolean
    error: boolean,
    message?: string
}


export class Controller{
    constructor(){}

    response = (res: Response, status: number, error:boolean = false, data:any | boolean = false, message?:string)=>{
       const statusObj:StatusObject = {
        200: 'successful',
        201:'Created Successfully',
        204:'ok',
        400:'Invalid Request Format',
        401:'Unauthorized Access',
        403:'Forbidden',
        404:'Resource Not Found',
        405:'Method Not Allowed',
        500: 'Internal Server Error'
       }

       let response: JSONResponse = {data: data, error: error ? true: false}
       if(response.data === false){
           delete response.data
       }
       
        response.message = message ? message : statusObj[status]
        return res.status(status).json(response);
    }

}