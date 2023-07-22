import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";
import Acudiente from "../entities/acudiente.js";
import Paciente from "../entities/paciente.js";
import Genero from "../entities/genero.js";
import HistorialPaciente from "../entities/historialPaciente.js";

const putTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.putTipoCita();
    return result;
};

const putEstadoCitaService = async (id, nombre) => {
    const estadoCita = new EstadoCita(id, nombre);
    const result = await estadoCita.putEstadoCita();
    return result;
};

const putTipoDocumentoService = async (id, nombre, abreviatura) => {
    const tipoDocumento = new TipoDocumento(id, nombre, abreviatura);
    const result = await tipoDocumento.putTipoDocumento();
    return result
};

const putGeneroService = async (id, nombre, abreviatura) => {
    const genero = new Genero(id, nombre, abreviatura);
    const result = await genero.putGenero();
    return result
};

const putAcudienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email) => {
    const acudiente = new Acudiente(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
    const result = await acudiente.putAcudiente();
    return result
};

const putPacienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email) => {
    const paciente = new Paciente(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
    const result = await paciente.putPaciente();
    return result
};

const putHistorialPacienteService = async (id, paciente) => {
    const historialPaciente = new HistorialPaciente(id, paciente);
    const result = await historialPaciente.putHistorialPaciente();
    return result
};


export {
    putTipoCitaService,
    putEstadoCitaService,
    putTipoDocumentoService,
    putAcudienteService,
    putPacienteService,
    putGeneroService,
    putHistorialPacienteService
}