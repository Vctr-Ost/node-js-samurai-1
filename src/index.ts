const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: any, res: any) => {
    let msg = 'aaaHisssasasasasa!';
    res.send(msg)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})