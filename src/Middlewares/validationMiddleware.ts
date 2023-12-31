import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

export const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const valid = validationResult(req);
    if (valid.isEmpty()) {
        next()
    }
    else res.status(400).send(valid);
}
