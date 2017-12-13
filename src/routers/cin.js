import express from 'express'
import cinModel from './database/cin'

var bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {  
    const field = {}
    cinModel.getList({limit: 1000}, field)
        .then((cinList) => res.json(cinList))
})

router.get('/:id', (req, res) => {  
    const id = req.params.id
    const field = {id}
    cinModel.getList({limit: 1000}, field)
        .then((cinList) => res.json(cinList[0]))
})

router.put('/:id', (req, res) => {  
    const cinId = req.params.id
    const condition = {id: cinId}
    const payload = (req.body)

    cinModel.updateByCondidtion(condition, payload)
        .then(
            result => res.responseOK(),
            err => res.json('')
        )
  })
  

export default router
