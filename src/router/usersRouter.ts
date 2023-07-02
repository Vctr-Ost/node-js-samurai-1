import {Router, Request, Response} from "express";
import bodyParser from 'body-parser';
import {usersRepo} from "../Repositories/usersRepo";

export const usersRouter = Router()

usersRouter.use(bodyParser.urlencoded({ extended: true }));
usersRouter.use(bodyParser.json());


usersRouter.get('/',  (req: Request, res: Response) => {
    res.send(usersRepo.getUsers())
})
usersRouter.get('/:id',  (req: Request, res: Response) => {
    res.send(usersRepo.getSingleUser(+req.params.id))
})
usersRouter.post('/',  (req: Request, res: Response) => {
    res.sendStatus(usersRepo.addUser(req.body.name, +req.body.age))
})
usersRouter.put('/:id',  (req: Request, res: Response) => {
    res.send(usersRepo.updUserName(+req.params.id, req.body.name))
})
usersRouter.delete('/:id',  (req: Request, res: Response) => {
    res.sendStatus(usersRepo.delUser(+req.params.id))
})