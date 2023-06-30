import {Router} from "express";

export const mainRouter = Router()

mainRouter.get('/', (req: any, res: any) => {
    let msg = 'Hi! This is my first BackEnd web application.';
    res.send(msg)
})