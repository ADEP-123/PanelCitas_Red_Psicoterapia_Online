import { Router } from "express";
import { putAcudienteController, putCitaController, putEstadoCitaController, putGeneroController, putHistorialPacienteController, putPacienteController, putTipoCitaController, putTipoDocumentoController } from "../controllers/putDataController.js";
import { middlewareAcudienteDTO, middlewareEstadoCitaDTO, middlewareGeneroDTO, middlewareHistorialPacienteDTO, middlewarePacienteDTO, middlewareTipoCitaDTO, middlewareTipoDocumentoDTO } from "./middleware/middlewareDTO.js";
const putInitRoute = () => {
    const router = Router()
    router.put("/tipoCita", middlewareTipoCitaDTO, putTipoCitaController)
    router.put("/estadoCita", middlewareEstadoCitaDTO, putEstadoCitaController)
    router.put("/tipoDocumento", middlewareTipoDocumentoDTO, putTipoDocumentoController)
    router.put("/genero", middlewareGeneroDTO, putGeneroController)
    router.put("/acudiente", middlewareAcudienteDTO, putAcudienteController)
    router.put("/paciente", middlewarePacienteDTO, putPacienteController)
    router.put("/historialPaciente", middlewareHistorialPacienteDTO, putHistorialPacienteController)
    router.put("/cita", putCitaController)
    return router;
}

export default putInitRoute