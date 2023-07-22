import { Router } from "express";
import { postTipoCitaController, postEstadoCitaController, postTipoDocumentoController, postPacienteController, postAcudienteController, postGeneroController, postHistorialPacienteController, postCitaController } from "../controllers/postDataController.js";
import { middlewareAcudienteDTO, middlewareEstadoCitaDTO, middlewareGeneroDTO, middlewareTipoCitaDTO, middlewareTipoDocumentoDTO } from "./middleware/middlewareDTO.js";

const postInitRoute = () => {
    const router = Router()
    router.post("/tipoCita", middlewareTipoCitaDTO, postTipoCitaController)
    router.post("/estadoCita", middlewareEstadoCitaDTO, postEstadoCitaController)
    router.post("/tipoDocumento", middlewareTipoDocumentoDTO, postTipoDocumentoController)
    router.post("/genero", middlewareGeneroDTO, postGeneroController)
    router.post("/acudiente", middlewareAcudienteDTO, postAcudienteController)
    router.post("/paciente", postPacienteController)
    router.post("/historialPaciente", postHistorialPacienteController)
    router.post("/cita", postCitaController)
    return router;
}

export default postInitRoute