import { deleteTipoCitaService, deleteEstadoCitaService, deleteTipoDocumentoService } from "../services/deleteServices.js";

const deleteTipoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.query
        const result = await deleteTipoCitaService(id, nombre);
        res.status(200).json({ message: `Se ha eliminado el registro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteEstadoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.query
        const result = await deleteEstadoCitaService(id, nombre);
        res.status(200).json({ message: `Se ha eliminado el registro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTipoDocumentoController = async (req, res, next) => {
    try {
        const { id, nombre, abreviatura } = req.query
        const result = await deleteTipoDocumentoService(id, nombre, abreviatura);
        res.status(200).json({ message: `Se ha eliminado el registro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    deleteTipoCitaController,
    deleteEstadoCitaController,
    deleteTipoDocumentoController
}