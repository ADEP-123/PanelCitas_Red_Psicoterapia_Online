import { testlogin } from "../services/loginService.js";
import dotenv from "dotenv";
import express from "express";
import { SignJWT, jwtVerify } from "jose";

const loginDataController = async (req, res, next) => {
    try {
        const { id, pass } = req.body
        const result = await testlogin(id, pass);
        const { authorization } = req.headers
        if (result.count == 1 || authorization) {
            let json;
            if (authorization) {
                const encoder = new TextEncoder();
                const jwData = await jwtVerify(
                    authorization,
                    encoder.encode(process.env.JWT_PRIVATE_KEY)
                );
                json = jwData.payload.json
            } else {
                json = {
                    id,
                    pass,
                    rol: "psicologo"
                }

            }
            const encoder = new TextEncoder();
            const jwtconstructor = new SignJWT({ json });
            const jwt = await jwtconstructor
                .setProtectedHeader({ alg: "HS256", typ: "JWT" })
                .setIssuedAt()
                .setExpirationTime("10m")
                .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
            // res.cookie('User', jwt, { maxAge: 600000, httpOnly: true });
            if (result.count == 1) { res.send({ message: "Token creado con exito", jwt }) }
        } else {
            res.status(500).json({ message: "El usuario no existe" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el controlador del login", error });
    }
};

export {
    loginDataController
}