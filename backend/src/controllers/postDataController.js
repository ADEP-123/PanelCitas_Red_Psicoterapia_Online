import { postTipoCitaService } from "../services/postServices.js";
import { postEstadoCitaService } from "../services/postServices.js";

const postTipoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body
        const result = await postTipoCitaService(id, nombre);
        res.status(200).json({ message: `Nuevo tipo de cita \'${nombre}\' creado con exito`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const postEstadoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body
        const result = await postEstadoCitaService(id, nombre);
        res.status(200).json({ message: `Nuevo estado de cita \'${nombre}\' creado con exito`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    postTipoCitaController,
    postEstadoCitaController
}