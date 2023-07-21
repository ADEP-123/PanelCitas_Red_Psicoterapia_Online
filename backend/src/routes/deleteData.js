import { Router } from "express";
import { deleteTipoCitaController } from "../controllers/deleteDataController.js";

const deleteInitRoute = () => {
    const router = Router()
    router.delete("/tipoCita", deleteTipoCitaController)
    return router;
}

export default deleteInitRoute