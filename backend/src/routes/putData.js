import { Router } from "express";
import { putAcudienteController, putCitaController, putEstadoCitaController, putGeneroController, putHistorialPacienteController, putPacienteController, putTipoCitaController, putTipoDocumentoController } from "../controllers/putDataController.js";

const putInitRoute = () => {
    const router = Router()
    router.put("/tipoCita", putTipoCitaController)
    router.put("/estadoCita", putEstadoCitaController)
    router.put("/tipoDocumento", putTipoDocumentoController)
    router.put("/genero", putGeneroController)
    router.put("/acudiente", putAcudienteController)
    router.put("/paciente", putPacienteController)
    router.put("/historialPaciente", putHistorialPacienteController)
    router.put("/cita", putCitaController)
    return router;
}

export default putInitRoute