import { testlogin } from "../services/loginService.js";
import dotenv from "dotenv";
import express from "express";
import { SignJWT } from "jose";

const loginDataController = async (req, res, next) => {
    try {
        const { id, pass } = req.body
        const result = await testlogin(id, pass);

        if (result.count == 1) {

            letjson = {
                id,
                pass,
                rol: "psicologo"

            }
            const encoder = new TextEncoder();
            const jwtconstructor = new SignJWT({ json });
            const jwt = await jwtconstructor
                .setProtectedHeader({ alg: "HS256", typ: "JWT" })
                .setIssuedAt()
                .setExpirationTime("30m")
                .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
            // res.cookie('User', jwt, { maxAge: 600000, httpOnly: true });
            res.send({ message: "Token creado con exito", jwt })
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