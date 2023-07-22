import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { tipoCitaDTO } from '../dto/js/tipoCitaDto.js';
import { estadoCitaDTO } from '../dto/js/estadoCitaDTO.js';
import { tipoDocumentoDTO } from '../dto/js/tipoDocumentoDTO.js';

const middlewareTipoCitaDTO = express();
middlewareTipoCitaDTO.use((req, res, next) => {
    try {
        let data = plainToClass(tipoCitaDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})

const middlewareEstadoCitaDTO = express();
middlewareEstadoCitaDTO.use((req, res, next) => {
    try {
        let data = plainToClass(estadoCitaDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})

const middlewareTipoDocumentoDTO = express();
middlewareTipoDocumentoDTO.use((req, res, next) => {
    try {
        let data = plainToClass(tipoDocumentoDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})


export {
    middlewareTipoCitaDTO,
    middlewareEstadoCitaDTO,
    middlewareTipoDocumentoDTO
}