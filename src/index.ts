const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const users = [
    {id: 1, name: 'Andriy', age: 29},
    {id: 2, name: 'Maxim', age: 40},
    {id: 3, name: 'Petro', age: 29},
    {id: 4, name: 'Viacheslav', age: 16},
    {id: 5, name: 'Ivan', age: 29}
]
const items = [
    {id: 1, title: 'computer', price: 19499},
    {id: 2, title: 'mouse', price: 499},
    {id: 3, title: 'headphones', price: 1999},
]



app.get('/', (req: Request, res: Response) => {
    res.send('HI!')
})

app.get('/users',  (req: Request, res: Response) => {
    if (req.query.age) res.send(users.filter(i => i.age === +req.query.age))
    else res.send(users)
})
app.get('/items',  (req: Request, res: Response) => {
    res.send(items)
})

app.get('/users/:id',  (req: Request, res: Response) => {
    let user = users.find(u => u.id === +req.params.id)
    if (user) res.send(user)
    else res.sendStatus(404)
})
app.post('/users',  (req: Request, res: Response) => {
    const newUser = {
        id:  users[users.length - 1].id + 1,
        name: req.body.name,
        age: req.body.age
    }
    users.push(newUser)
    res.status(201).send(newUser)
})
app.put('/users/:id',  (req: Request, res: Response) => {
    for(let i = 0; i < users.length; i++) {
        if (users[i].id === +req.params.id) {
            users[i].name = req.body.name
            res.status(200).send(users)
            return
        }
    }
    res.sendStatus(404)
})
app.delete('/users/:id',  (req: Request, res: Response) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === +req.params.id) {
            users.splice(i, 1)
            res.send(204)
            return
        }
    }
    else res.sendStatus(404)
})

app.get('/items/:id',  (req: Request, res: Response) => {
    let item = items.find(i => i.id === +req.params.id)
    if (item) res.send(item)
    else res.sendStatus(404)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

