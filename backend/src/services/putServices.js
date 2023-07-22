import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";
import Acudiente from "../entities/acudiente.js";

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

const putAcudienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email) => {
    const acudiente = new Acudiente(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
    const result = await acudiente.putAcudiente();
    return result
};


export {
    putTipoCitaService,
    putEstadoCitaService,
    putTipoDocumentoService,
    putAcudienteService
}