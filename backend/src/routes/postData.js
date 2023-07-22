import { Router } from "express";
import { postTipoCitaController, postEstadoCitaController, postTipoDocumentoController, postPacienteController } from "../controllers/postDataController.js";

const postInitRoute = () => {
    const router = Router()
    router.post("/tipoCita", postTipoCitaController)
    router.post("/estadoCita", postEstadoCitaController)
    router.post("/tipoDocumento", postTipoDocumentoController)
    router.post("/paciente", postPacienteController)
    return router;
}

export default postInitRoute