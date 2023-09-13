import { Request, Response } from "express";
import { MovieModel } from "../models/local-file-system.model";

export class MovieController {
    
    static async getAll(req: Request, res: Response) {
        const movies = await MovieModel.getAll()
        res.json(movies)
    }
}