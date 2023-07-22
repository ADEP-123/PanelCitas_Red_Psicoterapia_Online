import { putEstadoCitaService, putTipoCitaService, putTipoDocumentoService } from "../services/putServices.js";

const putTipoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body;
        const result = await putTipoCitaService(id, nombre);
        res.status(200).json({ message: `Se ha actualizado el estado de cita \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const putEstadoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body;
        const result = await putEstadoCitaService(id, nombre);
        res.status(200).json({ message: `Se ha actualizado el estado de cita \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const putTipoDocumentoController = async (req, res, next) => {
    try {
        const { id, nombre, abreviatura } = req.body
        const result = await putTipoDocumentoService(id, nombre, abreviatura);
        res.status(200).json({ message: `Se ha actualizado el tipo de documento \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    putTipoCitaController,
    putEstadoCitaController,
    putTipoDocumentoController
}