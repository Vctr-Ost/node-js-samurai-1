import {Router} from "express";
import bodyParser from 'body-parser';

export const mainRouter = Router()

mainRouter.use(bodyParser.urlencoded({ extended: true }));
mainRouter.use(bodyParser.json());



mainRouter.get('/', (req: any, res: any) => {
    let msg = 'Hi! This is my first BackEnd web application.';
    res.send(msg)
})