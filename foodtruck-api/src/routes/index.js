import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializedDatabase from '../db'

let router = express()

//connect to database
initializedDatabase(db => {
  //internal middleware
  router.use(middleware({config,db}))

  //api routes v1 (/v1)
})

export default router;
