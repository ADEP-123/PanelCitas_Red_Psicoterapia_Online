import { getAcudienteService, getTipoCitaService, getTipoDocumentoService } from "../services/getServices.js";
import { getEstadoCitaService } from "../services/getServices.js";

const getTipoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.query
        const result = await getTipoCitaService(id, nombre);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getEstadoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.query
        const result = await getEstadoCitaService(id, nombre);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getTipoDocumentoController = async (req, res, next) => {
    try {
        const { id, nombre, abreviatura } = req.query
        const result = await getTipoDocumentoService(id, nombre, abreviatura);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAcudienteController = async (req, res, next) => {
    try {
        const { id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email } = req.query
        const result = await getAcudienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    getTipoCitaController,
    getEstadoCitaController,
    getTipoDocumentoController,
    getAcudienteController
}