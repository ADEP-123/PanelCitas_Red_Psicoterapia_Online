import { Router } from "express";
import { putEstadoCitaController, putTipoCitaController } from "../controllers/putDataController.js";

const putInitRoute = () => {
    const router = Router()
    router.put("/tipoCita", putTipoCitaController)
    router.put("/estadoCita", putEstadoCitaController)
    return router;
}

export default putInitRoute