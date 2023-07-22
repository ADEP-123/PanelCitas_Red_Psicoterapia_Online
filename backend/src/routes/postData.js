import { Router } from "express";
import { postTipoCitaController, postEstadoCitaController, postTipoDocumentoController, postPacienteController, postAcudienteController } from "../controllers/postDataController.js";

const postInitRoute = () => {
    const router = Router()
    router.post("/tipoCita", postTipoCitaController)
    router.post("/estadoCita", postEstadoCitaController)
    router.post("/tipoDocumento", postTipoDocumentoController)
    router.post("/acudiente", postAcudienteController)
    router.post("/paciente", postPacienteController)
    return router;
}

export default postInitRoute