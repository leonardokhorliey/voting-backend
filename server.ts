import 'reflect-metadata'
import express, { Application } from 'express'
import { config } from './src/config/config'
import { CandidateRoute, ElectionRoute, UserRoute, PositionRoute, VoteRoute } from './src/routes'
import {sequelize} from './sequelize';
import cors from 'cors'


class Server {
  private app: Application
  constructor() {
    this.app = express()
  }

  public configuration() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.get('/', (req, res) => {
      res.status(200).json('starting...')
    })
    this.app.use('/auth', ElectionRoute)
    this.app.use('/user', VoteRoute)
    this.app.use('/cart', UserRoute)
    this.app.use('/menu', PositionRoute)
    this.app.use('/products', CandidateRoute)
  }

  public async start() {
    const PORT: any = config.web.port
    await sequelize.sync();
    this.configuration()
    this.app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}.`)
    })
  }
}
const server = new Server()
server.start()
