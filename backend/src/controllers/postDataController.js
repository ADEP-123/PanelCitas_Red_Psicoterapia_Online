import { postTipoCitaService, postTipoDocumentoService, postEstadoCitaService, postPacienteService, postAcudienteService } from "../services/postServices.js";

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

const postTipoDocumentoController = async (req, res, next) => {
    try {
        const { id, nombre, abreviatura } = req.body
        const result = await postTipoDocumentoService(id, nombre, abreviatura);
        res.status(200).json({ message: `Nuevo tipo de documento \'${nombre}\' creado con exito`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const postAcudienteController = async (req, res, next) => {
    try {
        const { id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email } = req.body
        const result = await postAcudienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
        res.status(200).json({ message: `Nuevo acudiente \'${nombre}\' creado con exito`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const postPacienteController = async (req, res, next) => {
    try {
        const { id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email } = req.body
        const edad = Math.floor((new Date() - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365.25));
        const result = await postPacienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
        res.status(200).json({ message: `Nuevo paciente \'${nombre}\' creado con exito`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    postTipoCitaController,
    postEstadoCitaController,
    postTipoDocumentoController,
    postAcudienteController,
    postPacienteController
}