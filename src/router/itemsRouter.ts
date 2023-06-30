import {Router} from "express";

const items = [
    {id: 1, title: 'computer', price: 19499},
    {id: 2, title: 'mouse', price: 499},
    {id: 3, title: 'headphones', price: 1999},
]

export const itemsRouter = Router()

itemsRouter.get('/',  (req: Request, res: Response) => {
    res.send(items)
})
itemsRouter.get('/:id',  (req: Request, res: Response) => {
    let item = items.find(i => i.id === +req.params.id)
    if (item) res.send(item)
    else res.sendStatus(404)
})