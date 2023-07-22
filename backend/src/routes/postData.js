import { Router } from "express";
import { postTipoCitaController, postEstadoCitaController, postTipoDocumentoController, postPacienteController, postAcudienteController, postGeneroController, postHistorialPacienteController, postCitaController } from "../controllers/postDataController.js";
import middlewareTipoCitaDTO from "./middleware/middlewareTipoCita.js";

const postInitRoute = () => {
    const router = Router()
    router.post("/tipoCita", middlewareTipoCitaDTO, postTipoCitaController)
    router.post("/estadoCita", postEstadoCitaController)
    router.post("/tipoDocumento", postTipoDocumentoController)
    router.post("/genero", postGeneroController)
    router.post("/acudiente", postAcudienteController)
    router.post("/paciente", postPacienteController)
    router.post("/historialPaciente", postHistorialPacienteController)
    router.post("/cita", postCitaController)
    return router;
}

export default postInitRoute