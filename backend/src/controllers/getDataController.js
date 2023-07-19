import { getTodasCitas } from "../services/getServices.js";

const getTodasCitasController = async (req, res, next) => {
    try {
        const result = await getTodasCitas();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};
export {
    getTodasCitasController
}