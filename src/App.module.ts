import express, { Application, json } from 'express'
import { router } from './router/index';
import { port } from './config/index';
import { corsMiddleware } from './middlewares';

export class App {
    private app: Application
    constructor() {
        this.app = express()
        this.middleware()
        this.router()
    }
    middleware() {
        this.app.use(json())
        this.app.use(corsMiddleware())
        this.app.disable('x-powered-by')
    }
    router() {
        this.app.get('/', (req, res) => {
            res.status(200).json({message: 'Welcome to express with bun.js'})
        })
        this.app.use('/api/v1', router)
    }
    async listen() {
        await this.app.listen(port)
        console.log(`listening on port http://localhost:${port}/`)
    }
}