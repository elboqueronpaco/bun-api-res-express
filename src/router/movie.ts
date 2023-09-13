import { Router } from "express";
import { MovieController } from "../movies/controllers/movie.controller";

const router = Router()
router.get('/', MovieController.getAll)

export { router }