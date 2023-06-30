import {usersRouter} from "./router/usersRouter";
import {itemsRouter} from "./router/itemsRouter";
import {mainRouter} from "./router/mainRouter";

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use('/', mainRouter)
app.use('/users', usersRouter)
app.use('/items', itemsRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})