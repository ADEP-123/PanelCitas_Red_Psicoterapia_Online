import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { tipoCitaDTO } from '../dto/js/tipoCitaDto.js';
import { estadoCitaDTO } from '../dto/js/estadoCitaDTO.js';
import { tipoDocumentoDTO } from '../dto/js/tipoDocumentoDTO.js';
import { generoDTO } from '../dto/js/generoDTO.js';
import { acudienteDTO } from '../dto/js/acudienteDTO.js';
import { pacienteDTO } from '../dto/js/pacienteDTO.js';
import { historialPacienteDTO } from '../dto/js/historialPacienteDTO.js';
import { citaDTO } from '../dto/js/citaDTO.js';

const middlewareTipoCitaDTO = express();
middlewareTipoCitaDTO.use((req, res, next) => {
    try {
        let data = plainToClass(tipoCitaDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareEstadoCitaDTO = express();
middlewareEstadoCitaDTO.use((req, res, next) => {
    try {
        let data = plainToClass(estadoCitaDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareTipoDocumentoDTO = express();
middlewareTipoDocumentoDTO.use((req, res, next) => {
    try {
        let data = plainToClass(tipoDocumentoDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareGeneroDTO = express();
middlewareGeneroDTO.use((req, res, next) => {
    try {
        let data = plainToClass(generoDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareAcudienteDTO = express();
middlewareAcudienteDTO.use((req, res, next) => {
    try {
        let data = plainToClass(acudienteDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePacienteDTO = express();
middlewarePacienteDTO.use((req, res, next) => {
    try {
        let data = plainToClass(pacienteDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareHistorialPacienteDTO = express();
middlewareHistorialPacienteDTO.use((req, res, next) => {
    try {
        let data = plainToClass(historialPacienteDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareCitaDTO = express();
middlewareCitaDTO.use((req, res, next) => {
    try {
        let data = plainToClass(citaDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    middlewareTipoCitaDTO,
    middlewareEstadoCitaDTO,
    middlewareTipoDocumentoDTO,
    middlewareGeneroDTO,
    middlewareAcudienteDTO,
    middlewarePacienteDTO,
    middlewareHistorialPacienteDTO,
    middlewareCitaDTO
}