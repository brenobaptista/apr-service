import express from 'express'
import cors from 'cors'
import compression from 'compression'

const expressLoader = app => {
  app.use(express.json())

  app.use(express.urlencoded({ extended: true }))

  app.use(cors())

  app.use(compression())

  app.disable('x-powered-by')
}

export default expressLoader
