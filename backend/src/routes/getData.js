import { Router } from "express";
import { getTipoCitaController } from "../controllers/getDataController.js";
import { getEstadoCitaController } from "../controllers/getDataController.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/tipoCita", getTipoCitaController)
    router.get("/estadoCita", getEstadoCitaController)
    return router;
};

export default getInitRoute