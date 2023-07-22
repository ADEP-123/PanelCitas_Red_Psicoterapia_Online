import { Router } from "express";
import { putAcudienteController, putCitaController, putEstadoCitaController, putGeneroController, putHistorialPacienteController, putPacienteController, putTipoCitaController, putTipoDocumentoController } from "../controllers/putDataController.js";
import { middlewareEstadoCitaDTO, middlewareTipoCitaDTO, middlewareTipoDocumentoDTO } from "./middleware/middlewareDTO.js";
const putInitRoute = () => {
    const router = Router()
    router.put("/tipoCita", middlewareTipoCitaDTO, putTipoCitaController)
    router.put("/estadoCita", middlewareEstadoCitaDTO, putEstadoCitaController)
    router.put("/tipoDocumento", middlewareTipoDocumentoDTO, putTipoDocumentoController)
    router.put("/genero", putGeneroController)
    router.put("/acudiente", putAcudienteController)
    router.put("/paciente", putPacienteController)
    router.put("/historialPaciente", putHistorialPacienteController)
    router.put("/cita", putCitaController)
    return router;
}

export default putInitRoute