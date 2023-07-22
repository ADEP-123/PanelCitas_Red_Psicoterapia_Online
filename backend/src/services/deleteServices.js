import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";
import Acudiente from "../entities/acudiente.js";
import Paciente from "../entities/paciente.js";

const deleteTipoCitaService = async (id) => {
    const tipoCita = new TipoCita(id);
    const result = await tipoCita.deleteTipoCita();
    return result;
}

const deleteEstadoCitaService = async (id) => {
    const estadoCita = new EstadoCita(id);
    const result = await estadoCita.deleteEstadoCita();
    return result
}

const deleteTipoDocumentoService = async (id) => {
    const tipoDocumento = new TipoDocumento(id);
    const result = await tipoDocumento.deleteTipoDocumento();
    return result
};

const deleteAcudienteService = async (id) => {
    const acudiente = new Acudiente(id);
    const result = await acudiente.deleteAcudiente();
    return result
};

const deletePacienteService = async (id) => {
    const paciente = new Paciente(id);
    const result = await paciente.deletePaciente();
    return result
};

export {
    deleteTipoCitaService,
    deleteEstadoCitaService,
    deleteTipoDocumentoService,
    deleteAcudienteService,
    deletePacienteService
}