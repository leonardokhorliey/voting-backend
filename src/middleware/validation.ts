import { Router, Response, Request, NextFunction } from "express";
import { validate, Matches, IsDefined } from "class-validator";
import { plainToClass, Expose } from "class-transformer";
export const validation = (dtoClass: any) => {
  
    return function (req: Request, res: Response, next: NextFunction) {
        const output: any = plainToClass(dtoClass, req.body);
        validate(output, { skipMissingProperties: true }).then(errors => {
            // errors is an array of validation errors
            console.log("errors", errors)
            if (errors.length > 0) {
                console.log(errors);
                let errorTexts = Array();
                for (const errorItem of errors) {
                    errorTexts = errorTexts.concat(errorItem.constraints);
                }
                res.status(400).send(errorTexts);
                return;
            } else {
                res.locals.input = output;
                next();
            }
        });
    };
};