const express = require('express')

const app = express()

app.use(express.static('public'))

app.all('*', (request, response) => {
    return response.status(404).send('')
})

app.listen(1337)