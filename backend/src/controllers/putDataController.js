import { putAcudienteService, putEstadoCitaService, putPacienteService, putTipoCitaService, putTipoDocumentoService } from "../services/putServices.js";

const putTipoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body;
        const result = await putTipoCitaService(id, nombre);
        res.status(200).json({ message: `Se ha actualizado el estado de cita \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const putEstadoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body;
        const result = await putEstadoCitaService(id, nombre);
        res.status(200).json({ message: `Se ha actualizado el estado de cita \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const putTipoDocumentoController = async (req, res, next) => {
    try {
        const { id, nombre, abreviatura } = req.body
        const result = await putTipoDocumentoService(id, nombre, abreviatura);
        res.status(200).json({ message: `Se ha actualizado el tipo de documento \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const putAcudienteController = async (req, res, next) => {
    try {
        const { id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email } = req.body
        const result = await putAcudienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
        res.status(200).json({ message: `Se ha actualizado el acudiente \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const putPacienteController = async (req, res, next) => {
    try {
        const { id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email} = req.body
        const result = await putPacienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
        res.status(200).json({ message: `Se ha actualizado el paciente \'${id}\'`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    putTipoCitaController,
    putEstadoCitaController,
    putTipoDocumentoController,
    putAcudienteController,
    putPacienteController
}