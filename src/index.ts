import {usersRouter} from "./router/usersRouter";
import {itemsRouter} from "./router/itemsRouter";
import {mainRouter} from "./router/mainRouter";
import {NextFunction, Request, Response} from "express";

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const middlewareCheckToken = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.token === '12345') next();
    else res.send('Enter the pass in query params like: _____ url ?token=12345');
};

app.use('/', middlewareCheckToken, mainRouter)
app.use('/users', usersRouter)
app.use('/items', itemsRouter)


app.get('/a', (req: Request, res: Response) => {
    res.send('YPAAAAAA');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})