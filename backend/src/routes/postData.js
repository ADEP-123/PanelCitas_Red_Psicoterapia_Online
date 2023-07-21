import { Router } from "express";
import { postTipoCitaController } from "../controllers/postDataController.js";

const postInitRoute = () => {
    const router = Router()
    router.post("/tipoCita", postTipoCitaController)
    return router;
}

export default postInitRoute