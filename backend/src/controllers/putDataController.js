import { putTipoCitaService } from "../services/putServices.js";

const putTipoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body;
        const result = await putTipoCitaService(id, nombre);
        res.status(200).json({ message: `se ha actualizado el tipo de cita \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};
export {
    putTipoCitaController
}