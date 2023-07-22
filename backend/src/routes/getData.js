import { Router } from "express";
import { getAcudienteController, getGeneroController, getPacienteController, getTipoCitaController, getTipoDocumentoController } from "../controllers/getDataController.js";
import { getEstadoCitaController } from "../controllers/getDataController.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/tipoCita", getTipoCitaController)
    router.get("/estadoCita", getEstadoCitaController)
    router.get("/tipoDocumento", getTipoDocumentoController)
    router.get("/genero", getGeneroController)
    router.get("/acudiente", getAcudienteController)
    router.get("/paciente", getPacienteController)
    return router;
};

export default getInitRoute