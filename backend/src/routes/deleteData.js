import { Router } from "express";
import { deleteEstadoCitaController, deleteTipoCitaController } from "../controllers/deleteDataController.js";

const deleteInitRoute = () => {
    const router = Router()
    router.delete("/tipoCita", deleteTipoCitaController)
    router.delete("/estadoCita", deleteEstadoCitaController)
    return router;
}

export default deleteInitRoute