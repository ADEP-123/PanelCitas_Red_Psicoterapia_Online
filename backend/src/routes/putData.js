import { Router } from "express";
import { putAcudienteController, putEstadoCitaController, putTipoCitaController, putTipoDocumentoController } from "../controllers/putDataController.js";

const putInitRoute = () => {
    const router = Router()
    router.put("/tipoCita", putTipoCitaController)
    router.put("/estadoCita", putEstadoCitaController)
    router.put("/tipoDocumento", putTipoDocumentoController)
    router.put("/acudiente", putAcudienteController)
    return router;
}

export default putInitRoute