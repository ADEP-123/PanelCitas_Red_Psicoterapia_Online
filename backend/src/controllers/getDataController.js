import { getTipoCita } from "../services/getServices.js";

const getTipoCitaController = async (req, res, next) => {
    try {
        const { Id } = req.query
        const result = await getTipoCita(Id);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};
export {
    getTipoCitaController
}