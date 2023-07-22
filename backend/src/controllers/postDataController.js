import { getAcudienteService, getCitaService } from "../services/getServices.js";
import { postTipoCitaService, postTipoDocumentoService, postEstadoCitaService, postPacienteService, postAcudienteService, postGeneroService, postHistorialPacienteService, postCitaService } from "../services/postServices.js";

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

const postGeneroController = async (req, res, next) => {
    try {
        const { id, nombre, abreviatura } = req.body
        const result = await postGeneroService(id, nombre, abreviatura);
        res.status(200).json({ message: `Nuevo genero \'${nombre}\' creado con exito`, result })
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
        const edad = Math.floor((new Date() - new Date(fechaNacimiento)) / (1000 * 60 * 60 * 24 * 365.25));
        let result;
        if (edad < 18) {
            result = await getAcudienteService(acudiente);
            if (result.length == 0 || result.length > 1) {
                res.status(500).json({ message: "El paciente que intenta crear es menor y no esta enviando informacion del acudiente o el acudiente enviado no se encuentra registrado, primero registre el acudiente" });
            } else {
                result = await postPacienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
                res.status(200).json({ message: `Nuevo paciente \'${nombre}\' creado con exito`, result })
            }
        } else {
            result = await postPacienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
            res.status(200).json({ message: `Nuevo paciente \'${nombre}\' creado con exito`, result })
        }

    } catch (error) {
        res.status(500).json(error);
    }
};

const postHistorialPacienteController = async (req, res, next) => {
    try {
        const { id, paciente } = req.body
        const result = await postHistorialPacienteService(id, paciente);
        res.status(200).json({ message: `Nuevo historial del paciente \'${paciente}\' creado con exito`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const postCitaController = async (req, res, next) => {
    try {
        const { id, tipo, estado, inicio, fin, ultimaActualiz, historial } = req.body
        let result;
        if (new Date(fin) < new Date(inicio)) {
            res.status(500).json({ message: "La hora de inicio de la cita debe ser anterior a la hora final" });
        } else {
            result = await getCitaService();
            let coinc = false;
            result.forEach(element => {
                if (element.inicio == inicio || element.fin == fin) {
                    if (element.estado == 2) {
                        coinc = true
                    }
                }
            });
            if (coinc == true) {
                res.status(500).json({ message: 'El horario elegido ya existe' });
            } else {
                result = await postCitaService(id, tipo, estado, inicio, fin, ultimaActualiz, historial);
                res.status(200).json({ message: `Nuevo cita creada con exito`, result })
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    postTipoCitaController,
    postEstadoCitaController,
    postTipoDocumentoController,
    postAcudienteController,
    postPacienteController,
    postGeneroController,
    postHistorialPacienteController,
    postCitaController
}