import { Router } from "express";
import { deleteAcudienteController, deleteCitaController, deleteEstadoCitaController, deleteGeneroController, deleteHistorialPacienteController, deletePacienteController, deleteTipoCitaController, deleteTipoDocumentoController } from "../controllers/deleteDataController.js";

const deleteInitRoute = () => {
    const router = Router()
    router.delete("/tipoCita", deleteTipoCitaController)
    router.delete("/estadoCita", deleteEstadoCitaController)
    router.delete("/tipoDocumento", deleteTipoDocumentoController)
    router.delete("/genero", deleteGeneroController)
    router.delete("/acudiente", deleteAcudienteController)
    router.delete("/paciente", deletePacienteController)
    router.delete("/historialPaciente", deleteHistorialPacienteController)
    router.delete("/cita", deleteCitaController)
    return router;
}

export default deleteInitRoute