import {Router, Request, Response} from "express";
import bodyParser from 'body-parser';
import {itemsRepo} from "../Repositories/itemsRepo";

export const itemsRouter = Router()

itemsRouter.use(bodyParser.urlencoded({ extended: true }));
itemsRouter.use(bodyParser.json());


itemsRouter.get('/',  (req: Request, res: Response) => {
    res.send(itemsRepo.getItems())
})
itemsRouter.get('/:id',  (req: Request, res: Response) => {
    const p = itemsRepo.getSingleItem(+req.params.id);
    if (p === 404) res.sendStatus(404);
    else res.send(p);
})