import {Router} from "express";

const users = [
    {id: 1, name: 'Andriy', age: 29},
    {id: 2, name: 'Maxim', age: 40},
    {id: 3, name: 'Petro', age: 29},
    {id: 4, name: 'Viacheslav', age: 16},
    {id: 5, name: 'Ivan', age: 29}
]

export const usersRouter = Router()

usersRouter.get('/',  (req: Request, res: Response) => {
    if (req.query.age) res.send(users.filter(i => i.age === +req.query.age))
    else res.send(users)
})
usersRouter.post('/',  (req: Request, res: Response) => {
    const newUser = {
        id:  users[users.length - 1].id + 1,
        name: req.body.name,
        age: req.body.age
    }
    users.push(newUser)
    res.status(201).send(newUser)
})

usersRouter.get('/:id',  (req: Request, res: Response) => {
    let user = users.find(u => u.id === +req.params.id)
    if (user) res.send(user)
    else res.sendStatus(404)
})
usersRouter.put('/:id',  (req: Request, res: Response) => {
    for(let i = 0; i < users.length; i++) {
        if (users[i].id === +req.params.id) {
            users[i].name = req.body.name
            res.status(200).send(users)
            return
        }
    }
    res.sendStatus(404)
})
usersRouter.delete('/:id',  (req: Request, res: Response) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === +req.params.id) {
            users.splice(i, 1)
            res.send(204)
            return
        }
    }
else res.sendStatus(404)
})