import {Router} from "express";
import bodyParser from 'body-parser';

export const mainRouter = Router()

mainRouter.use(bodyParser.urlencoded({ extended: true }));
mainRouter.use(bodyParser.json());



mainRouter.get('/', (req: any, res: any) => {
    let msg = 'My first node.js page!';
    res.send(msg)
})