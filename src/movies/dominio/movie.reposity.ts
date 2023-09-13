import { Movie } from "./movie.entity";

export interface MovieRepository {
    getAll: ()=>Movie[]
}