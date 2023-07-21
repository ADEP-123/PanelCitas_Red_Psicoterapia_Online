import { Router } from "express";
import { getTipoCitaController } from "../controllers/getDataController.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/tipoCita", getTipoCitaController)
    return router;
}

export default getInitRoute