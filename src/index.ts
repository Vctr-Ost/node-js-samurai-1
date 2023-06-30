import {usersRouter} from "./router/usersRouter";
import {itemsRouter} from "./router/itemsRouter";

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', (req: Request, res: Response) => {
    res.send('HI!')
})

app.use('/users', usersRouter)
app.use('/items', itemsRouter)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

