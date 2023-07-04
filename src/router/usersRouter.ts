import {Router, Request, Response} from "express";
import bodyParser from 'body-parser';
import {usersRepo} from "../Repositories/usersRepo";
import { body } from 'express-validator';
import {validationMiddleware} from "../Middlewares/validationMiddleware";

export const usersRouter = Router()

usersRouter.use(bodyParser.urlencoded({ extended: true }));
usersRouter.use(bodyParser.json());



const IsStringValidation = body('name').isString();
const isLengthValidation = body('name').trim().isLength({min: 3, max: 20}).withMessage('Не допустима довжина');



usersRouter.get('/',  (req: Request, res: Response) => {
    res.send(usersRepo.getUsers())
})
usersRouter.get('/:id', (req: Request, res: Response) => {
    res.send(usersRepo.getSingleUser(+req.params.id))
})

usersRouter.post('/',
    IsStringValidation,
    isLengthValidation,
    validationMiddleware,
    (req: Request, res: Response) => {
        res.sendStatus(usersRepo.addUser(req.body.name, +req.body.age))
    })

usersRouter.put('/:id',  (req: Request, res: Response) => {
res.send(usersRepo.updUserName(+req.params.id, req.body.name))
})
usersRouter.delete('/:id',  (req: Request, res: Response) => {
    res.sendStatus(usersRepo.delUser(+req.params.id))
})