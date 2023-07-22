import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";
import Paciente from "../entities/paciente.js";

const postTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.postTipoCita(nombre);
    return result;
};

const postEstadoCitaService = async (id, nombre) => {
    const estadoCita = new EstadoCita(id, nombre);
    const result = await estadoCita.postEstadoCita(nombre);
    return result
};

const postTipoDocumentoService = async (id, nombre, abreviatura) => {
    const tipoDocumento = new TipoDocumento(id, nombre, abreviatura);
    const result = await tipoDocumento.postTipoDocumento(nombre, abreviatura);
    return result
};

const postPacienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email) => {
    const paciente = new Paciente(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
    const result = await paciente.postPaciente(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
    return result
};

export {
    postTipoCitaService,
    postEstadoCitaService,
    postTipoDocumentoService,
    postPacienteService
}