import { origin } from 'bun'
import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:3000'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin: any, callback) => {
        if (acceptedOrigins.includes(origin)) {
            return callback(null, true)
        }
        if (!origin) {
            return callback(null, true)
        }
        return callback(new Error('Not allower by CORS'))
    }
})