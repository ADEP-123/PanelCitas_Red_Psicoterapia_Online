import { putAcudienteService, putCitaService, putEstadoCitaService, putGeneroService, putHistorialPacienteService, putPacienteService, putTipoCitaService, putTipoDocumentoService } from "../services/putServices.js";

const putTipoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body;
        if (id) {
            const result = await putTipoCitaService(id, nombre);
            res.status(200).json({ message: `Se ha actualizado el estado de cita \'${id}\'`, result })
        } else { res.status(500).json({ message: "Debe ingresar un id" }) };
    } catch (error) {
        res.status(500).json(error);
    }
};

const putEstadoCitaController = async (req, res, next) => {
    try {
        const { id, nombre } = req.body;
        if (id) {
            const result = await putEstadoCitaService(id, nombre);
            res.status(200).json({ message: `Se ha actualizado el estado de cita \'${id}\'`, result })
        } else { res.status(500).json({ message: "Debe ingresar un id" }) };
    } catch (error) {
        res.status(500).json(error);
    }
};

const putTipoDocumentoController = async (req, res, next) => {
    try {
        const { id, nombre, abreviatura } = req.body
        if (id) {
            const result = await putTipoDocumentoService(id, nombre, abreviatura);
            res.status(200).json({ message: `Se ha actualizado el tipo de documento \'${id}\'`, result })
        } else { res.status(500).json({ message: "Debe ingresar un id" }) };
    } catch (error) {
        res.status(500).json(error);
    }
};

const putGeneroController = async (req, res, next) => {
    try {
        const { id, nombre, abreviatura } = req.body

        if (id) {
            const result = await putGeneroService(id, nombre, abreviatura);
            res.status(200).json({ message: `Se ha actualizado el tipo de documento \'${id}\'`, result })
        } else { res.status(500).json({ message: "Debe ingresar un id" }) };
    } catch (error) {
        res.status(500).json(error);
    }
};

const putAcudienteController = async (req, res, next) => {
    try {
        const { id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email } = req.body
        if (id) {
            const result = await putAcudienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
            res.status(200).json({ message: `Se ha actualizado el acudiente \'${id}\'`, result })
        } else { res.status(500).json({ message: "Debe ingresar un id" }) };
    } catch (error) {
        res.status(500).json(error);
    }
};

const putPacienteController = async (req, res, next) => {
    try {
        const { id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email } = req.body
        if (id) {
            const result = await putPacienteService(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
            res.status(200).json({ message: `Se ha actualizado el paciente \'${id}\'`, result })
        } else { res.status(500).json({ message: "Debe ingresar un id" }) };
    } catch (error) {
        res.status(500).json(error);
    }
};

const putHistorialPacienteController = async (req, res, next) => {
    try {
        const { id, paciente } = req.body
        if (id) {
            const result = await putHistorialPacienteService(id, paciente);
            res.status(200).json({ message: `Se ha actualizado el Historial de id ${id}`, result })
        } else { res.status(500).json({ message: "Debe ingresar un id" }) };
    } catch (error) {
        res.status(500).json(error);
    }
};

const putCitaController = async (req, res, next) => {
    try {
        const { id, tipo, estado, inicio, fin, historial } = req.body
        if (id) {
            const ahora = new Date();
            const año = ahora.getFullYear();
            const mes = String(ahora.getMonth() + 1).padStart(2, '0');
            const dia = String(ahora.getDate()).padStart(2, '0');
            const hora = String(ahora.getHours()).padStart(2, '0');
            const minutos = String(ahora.getMinutes()).padStart(2, '0');
            const segundos = String(ahora.getSeconds()).padStart(2, '0');
            let ultimaActualiz = `${año}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
            const result = await putCitaService(id, tipo, estado, inicio, fin, ultimaActualiz, historial);
            res.status(200).json({ message: `Se ha actualizado el Historial de id ${id}`, result })
        } else { res.status(500).json({ message: "Debe ingresar un id" }) };
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    putTipoCitaController,
    putEstadoCitaController,
    putTipoDocumentoController,
    putAcudienteController,
    putPacienteController,
    putGeneroController,
    putHistorialPacienteController,
    putCitaController
}