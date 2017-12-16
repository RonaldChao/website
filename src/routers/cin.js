import express from 'express'
import cinModel from './database/cin'

let bodyParser = require('body-parser')
const router = express.Router()


// import cors from 'cors'
// var corsOptions = {
//     origin: function (origin, callback) {

//         console.log('origin: ', origin)
//         callback(null, true)
//     //   if (whitelist.indexOf(origin) !== -1) {
//     //     callback(null, true)
//     //   } else {
//     //     callback(new Error('Not allowed by CORS'))
//     //   }
//     }
//   }

// router.use(cors(corsOptions))

router.use(bodyParser.json())

router.use((req, res, next) => {
  const refer = req.headers.referrer || req.headers.referer

  console.log('refer: ', refer)
  console.log('req.headers: ', req.headers)

  next()
})

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
  const payload = req.body

  cinModel.updateByCondidtion(condition, payload)
    .then(
      () => res.responseOK(),
      err => res.json(err)
    )
})


export default router
