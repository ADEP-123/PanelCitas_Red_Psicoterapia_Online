import { Router } from "express";
import { getTodasCitasController } from "../controllers/getDataController.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/AllDateTypes",getTodasCitasController)
    return router;
}

export default getInitRoute