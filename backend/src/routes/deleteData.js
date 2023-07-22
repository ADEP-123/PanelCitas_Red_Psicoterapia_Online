import { Router } from "express";
import { deleteAcudienteController, deleteEstadoCitaController, deleteGeneroController, deleteHistorialPacienteController, deletePacienteController, deleteTipoCitaController, deleteTipoDocumentoController } from "../controllers/deleteDataController.js";

const deleteInitRoute = () => {
    const router = Router()
    router.delete("/tipoCita", deleteTipoCitaController)
    router.delete("/estadoCita", deleteEstadoCitaController)
    router.delete("/tipoDocumento", deleteTipoDocumentoController)
    router.delete("/genero", deleteGeneroController)
    router.delete("/acudiente", deleteAcudienteController)
    router.delete("/paciente", deletePacienteController)
    router.delete("/historialPaciente", deleteHistorialPacienteController)
    return router;
}

export default deleteInitRoute