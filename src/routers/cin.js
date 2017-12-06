import express from 'express'
import cinModel from './database/cin'

var bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {  
    const field = {}
    cinModel.getList({limit: 1000}, field).then(
      (cinList) => {
          res.json(cinList)
      }
    )
})

export default router
