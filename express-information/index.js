const express = require('express')()
const os = require('os')
const port = 3000

express.get('/', (req, res, next) => {
    Object.keys(os).forEach(key => console.log(typeof os[key] == 'function' ? os[key]() : os[key]))
    res.send('enviou')
})

express.listen(3000, () => console.log(`server listening on port ${port}`))