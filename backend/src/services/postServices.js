import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";
import Paciente from "../entities/paciente.js";
import Acudiente from "../entities/acudiente.js";
import Genero from "../entities/genero.js";
import HistorialPaciente from "../entities/historialPaciente.js";
import Cita from "../entities/cita.js";

const postTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.postTipoCita();
    return result;
};

const postEstadoCitaService = async (id, nombre) => {
    const estadoCita = new EstadoCita(id, nombre);
    const result = await estadoCita.postEstadoCita();
    return result
};

const postTipoDocumentoService = async (id, nombre, abreviatura) => {
    const tipoDocumento = new TipoDocumento(id, nombre, abreviatura);
    const result = await tipoDocumento.postTipoDocumento();
    return result
};

const postGeneroService = async (id, nombre, abreviatura) => {
    const genero = new Genero(id, nombre, abreviatura);
    const result = await genero.postGenero();
    return result
};

const postAcudienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email) => {
    const acudiente = new Acudiente(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
    const result = await acudiente.postAcudiente();
    return result
};

const postPacienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email) => {
    const paciente = new Paciente(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
    const result = await paciente.postPaciente();
    return result
};

const postHistorialPacienteService = async (id, paciente) => {
    const historialPaciente = new HistorialPaciente(id, paciente);
    const result = await historialPaciente.postHistorialPaciente();
    return result
};

const postCitaService = async (id, tipo, estado, inicio, fin, ultimaActualiz, historial) => {
    const cita = new Cita(id, tipo, estado, inicio, fin, ultimaActualiz, historial);
    const result = await cita.postCita();
    return result
};

export {
    postTipoCitaService,
    postEstadoCitaService,
    postTipoDocumentoService,
    postPacienteService,
    postAcudienteService,
    postGeneroService,
    postHistorialPacienteService,
    postCitaService
}