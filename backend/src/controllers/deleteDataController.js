import { deleteTipoCitaService, deleteEstadoCitaService, deleteTipoDocumentoService, deleteAcudienteService, deletePacienteService } from "../services/deleteServices.js";

const deleteTipoCitaController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await deleteTipoCitaService(id);
        res.status(200).json({ message: `Se ha eliminado el registro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteEstadoCitaController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await deleteEstadoCitaService(id);
        res.status(200).json({ message: `Se ha eliminado el registro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTipoDocumentoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await deleteTipoDocumentoService(id);
        res.status(200).json({ message: `Se ha eliminado el registro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteAcudienteController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await deleteAcudienteService(id);
        res.status(200).json({ message: `Se ha eliminado el registro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const deletePacienteController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await deletePacienteService(id);
        res.status(200).json({ message: `Se ha eliminado el registro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    deleteTipoCitaController,
    deleteEstadoCitaController,
    deleteTipoDocumentoController,
    deleteAcudienteController,
    deletePacienteController
}