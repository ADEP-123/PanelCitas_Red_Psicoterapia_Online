import { getTipoCitaService } from "../services/getServices.js";

const getTipoCitaController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await getTipoCitaService(id);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};
export {
    getTipoCitaController
}