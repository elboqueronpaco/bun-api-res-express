import { readJSON } from "../../config";
import { Movie } from "../dominio";


const movies = readJSON('../movies.json')

export class MovieModel {
   
    static async getAll(): Promise<Movie[]> {
        return await movies
    }
}