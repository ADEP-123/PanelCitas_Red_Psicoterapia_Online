import { Router } from "express";
import { postTipoCitaController } from "../controllers/postDataController.js";
import { postEstadoCitaController } from "../controllers/postDataController.js";

const postInitRoute = () => {
    const router = Router()
    router.post("/tipoCita", postTipoCitaController)
    router.post("/estadoCita", postEstadoCitaController)
    return router;
}

export default postInitRoute