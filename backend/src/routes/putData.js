import { Router } from "express";
import { putTipoCitaController } from "../controllers/putDataController.js";

const putInitRoute = () => {
    const router = Router()
    router.put("/tipoCita", putTipoCitaController)
    return router;
}

export default putInitRoute