import { deleteTipoCitaService } from "../services/deleteServices.js";

const deleteTipoCitaController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await deleteTipoCitaService(id);
        res.status(200).json({ message: `Se ha eliminado el regiustro de id \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};
export {
    deleteTipoCitaController
}